#!/usr/bin/env python3

import bz2
import gzip
import json
import lzma
import sqlite3
import subprocess
import tempfile
import xml.etree.ElementTree as ET

from collections import defaultdict
from distutils.version import LooseVersion

import debian.debian_support
from debian.deb822 import Packages
import requests
import yaml

with open('data.yml') as ymlfile:
    data = yaml.safe_load(ymlfile)

version_data = data['groups']

def cleanup_version(version: str):
    return version.split('+')[0].split('~')[0]

def fetch_debian_packages(release: str, suites: list | None = None, mirror: str = 'https://deb.debian.org/debian'):
    debian_packages = defaultdict(list)
    if suites is None:
        suites = ['main']
    for suite in suites:
        for compression in ['xz', 'gz']:
            if compression == 'xz':
                decompress = lzma.decompress
            elif compression == 'gz':
                decompress = gzip.decompress
            repo_url = f'{mirror}/dists/{release}/{suite}/binary-amd64/Packages.{compression}'
            remote_packages = requests.get(repo_url)
            if remote_packages.status_code == 200:
                for pkg in Packages.iter_paragraphs(decompress(remote_packages.content), use_apt_pkg=False):
                    debian_packages[pkg['Package']].append(pkg['Version'])
                break
    return debian_packages


def fetch_ubuntu_packages(release: str, suites: list | None = None, mirror: str = 'http://archive.ubuntu.com/ubuntu'):
    if suites is None:
        suites = ['main', 'universe']
    return fetch_debian_packages(release=release, suites=suites, mirror=mirror)


def fetch_centos_packages(release: str, repos: list | None = None, mirror: str = 'http://mirror.centos.org/centos', arch: str = 'x86_64', subdir: str = 'os'):
    def ff(_pkg):
        return True
    packages = defaultdict(list)

    if repos is None:
        repos = ['BaseOS', 'AppStream']

    for repo in repos:
        repo_url = f'{mirror}/{release}/{repo}/{arch}/{subdir}'
        packages |= fetch_yum_packages_from_repo(repo_url, ff)

    return packages


# https://download.opensuse.org/distribution/leap/
# https://download.opensuse.org/source/distribution/leap/
def fetch_suse_packages(release: str, mirror: str = 'https://download.opensuse.org/distribution/leap', arch: str = 'x86_64'):
    def ff(pkg):
        return pkg.find('{http://linux.duke.edu/metadata/common}packager').text == 'https://www.suse.com/' and pkg.find('{http://linux.duke.edu/metadata/common}arch').text in ['noarch', arch]
    packages = defaultdict(list)

    repos = ['oss']

    for repo in repos:
        repo_url = f'{mirror}/{release}/repo/{repo}'
        packages |= fetch_yum_packages_from_repo(repo_url, ff)
    return packages


def fetch_yum_packages_from_repo(repo_url: str, filterfun):
    packages = defaultdict(list)

    r = requests.get(f'{repo_url}/repodata/repomd.xml')

    repomd = ET.fromstring(r.content)

    primary_location = repomd.find('.//*[@type="primary"]/{http://linux.duke.edu/metadata/repo}location').get('href')
    primary_url = f'{repo_url}/{primary_location}'
    if primary_url.endswith('.xz'):
        decompress = lzma.decompress
    elif primary_url.endswith('.bz2'):
        decompress = bz2.decompress
    elif primary_url.endswith('.gz'):
        decompress = gzip.decompress
    else:
        raise ValueError(primary_url)

    s = requests.get(primary_url)

    primary = ET.fromstring(decompress(s.content))

    for pkg in primary.iter('{http://linux.duke.edu/metadata/common}package'):
        if not filterfun(pkg): continue
        name = pkg.find('{http://linux.duke.edu/metadata/common}name').text
        version = pkg.find('{http://linux.duke.edu/metadata/common}version').get('ver')
        packages[name].append(version)

    return packages


def add_distro_data(release: str, distro_packages: list, distro: str = 'debian'):
    for grp, packages in data['distros'][distro]['packages'].items():
        for name, pkgs in packages.items():
            if grp not in version_data:
                version_data[grp] = {}
            if 'programs' not in version_data[grp]:
                version_data[grp]['programs'] = {name: {'versions': {}}}
            if name not in version_data[grp]['programs']:
                version_data[grp]['programs'][name] = {}
            if 'versions' not in version_data[grp]['programs'][name]:
                version_data[grp]['programs'][name]['versions'] = {}
            if distro not in version_data[grp]['programs'][name]['versions']:
                version_data[grp]['programs'][name]['versions'][distro] = {}
            if release not in version_data[grp]['programs'][name]['versions'][distro]:
                version_data[grp]['programs'][name]['versions'][distro][release] = {'version': []}
            if not isinstance(pkgs, list):
                pkgs = [pkgs]
            for pkg in pkgs:
                try:
                    for version in distro_packages[pkg]:
                        if distro in ['debian', 'ubuntu']:
                            version = debian.debian_support.Version(version).upstream_version
                        version = cleanup_version(version)
                        # not using a set, json can't dump sets as lists and sets fuck up insertion order
                        if '.' in version:
                            shortened_version = '.'.join(version.split('.')[:2])
                        else:
                            shortened_version = version
                        version_found = False
                        for index, existing_version in enumerate(version_data[grp]['programs'][name]['versions'][distro][release]['version']):
                            if existing_version.startswith(shortened_version):
                                version_found = True
                                if LooseVersion(existing_version) < LooseVersion(version):
                                    version_data[grp]['programs'][name]['versions'][distro][release]['version'][index] = version
                        if not version_found:
                            version_data[grp]['programs'][name]['versions'][distro][release]['version'].append(version)
                except KeyError:
                    pass


def add_debian_data(release: str, distro_packages: list):
    return add_distro_data(release, distro_packages, 'debian')


def add_ubuntu_data(release: str, distro_packages: list):
    return add_distro_data(release, distro_packages, 'ubuntu')


def add_centos_data(release: str, distro_packages: list):
    return add_distro_data(release, distro_packages, 'rhel')


def add_suse_data(release: str, distro_packages: list):
    return add_distro_data(release, distro_packages, 'sles')


for release in data['distros']['debian']['versions'].keys():
    for suffix in ['', '-updates']:
        debian_packages = fetch_debian_packages(f"{release}{suffix}")
        add_debian_data(release, debian_packages)
    if release in ['stretch', 'buster']:
        security_release = f"{release}/updates"
    else:
        security_release = f"{release}-security"
    debian_packages = fetch_debian_packages(security_release, mirror="https://deb.debian.org/debian-security")
    add_debian_data(release, debian_packages)

for release in data['distros']['ubuntu']['versions'].keys():
    for suffix in ['', '-security', '-updates']:
        debian_packages = fetch_ubuntu_packages(f"{release}{suffix}")
        add_ubuntu_data(release, debian_packages)

add_centos_data('7', fetch_centos_packages('7', ['os'], subdir=''))
add_centos_data('8', fetch_centos_packages('8-stream'))
add_centos_data('9', fetch_centos_packages('9-stream', mirror='https://mirror.stream.centos.org/'))

add_suse_data('15', fetch_suse_packages('15.4'))
add_suse_data('15-next', fetch_suse_packages('15.5'))

with open('data.json', 'w') as jsonfile:
    json.dump({'version_data': version_data, 'distros': data['distros']}, jsonfile, indent=2)
