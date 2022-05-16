////// Programs & Versions

var version_data = {

  /*** Ruby ***/
  ruby: {
    short: "Ruby",
    description: "Interpreter for the Ruby language",
    programs: {
      ruby2x: {
        description: "Ruby 2.x",
        versions: {

          debian: {
            etch: {
            },
            lenny: {
            },
            squeeze: {
            },
            wheezy: {
            },
            jessie : {
              version: "2.1.5"
            },
            stretch : {
              version: "2.3.3"
            },
          },

          ubuntu: {
            lucid: {
            },
            precise: {
            },
            quantal: {
            },
            raring: {
            },
            saucy: {
              version: "2.0.0 p299"
            },
            trusty: {
              version: "2.0.0 p353"
            },
            utopic: {
              version: "2.1.1"
            },
            xenial: { version: "2.3.0" },
            yakkety: { version: "2.3.1" },
            zesty: { version: "2.3.3" },
            artful: { version: "2.3.3" }
          },

          rhel: {
            4: {}, 5: {}, 6: {},
            7: {
              version: "2.0.0 p247"
            },
          },

          sles: { 9: {}, 10: {}, 11: {} },

        }
      },

    }
  },


  /*** Python ***/
  python: {
    short: "Python",
    description: "Interpreter for the Python language",
    programs: {
      python2: {
        description: "Python 2.x",
        versions: {

          /* First version should be the default version. */

          debian: {
            etch: { version: "2.4.4, 2.5.0" },
            lenny: { version: "2.4.6, 2.5.2" },
            squeeze: { version: "2.5.5, 2.6.6" },
            wheezy: { version: "2.7.3, 2.6.8" },
            jessie: { version: "2.7.9" },
            stretch: { version: "2.7.13" },
          },

          ubuntu: {
            lucid: { version: "2.5.5, 2.6.6" },
            precise: { version: "2.7.3" },
            quantal: { version: "2.7.3" },
            raring: { version: "2.7.4" },
            saucy: { version: "2.7.5" },
            trusty: { version: "2.7.6" },
            utopic: { version: "2.7.6" },
            xenial: { version: "2.7.12" },
            yakkety: { version: "2.7.13" },
            zesty: { version: "2.7.13" },
            artful: { version: "2.7.13" }
          },

          rhel: {
            4: { version: "2.3.4" },
            5: { version: "2.4.3" },
            6: { version: "2.6.6" },
            7: { version: "2.7.5" },
          },

          sles: {
            9: { version: "2.3.3" },
            10: { version: "2.4.2" },
            11: { version: "2.6.0" },
          },

        }
      },
      python3: {
        description: "Python 3.x",
        versions: {

          /* First version should be the default version. */

          debian: {
            etch: {},
            lenny: {},
            squeeze: { version: "3.1.3" },
            wheezy: { version: "3.2.3" },
            jessie: { version: "3.4.2" },
            stretch: { version: "3.5.3" },
          },

          ubuntu: {
            lucid: { version: "3.1.2" },
            precise: { version: "3.2.3" },
            quantal: { version: "3.3.0, 3.2.3" },
            raring: { version: "3.3.1" },
            saucy: { version: "3.3.2" },
            trusty: { version: "3.3.4 3.4~rc1" },
            utopic: { version: "3.4.0" },
            xenial: { version: "3.5.2" },
            yakkety: { version: "3.5.2, 3.6.0~b2" },
            zesty: { version: "3.5.3, 3.6.1" },
            artful: { version: "3.6.1" }
          },

          rhel: { 4: {}, 5: {}, 6: {}, 7: {} },

          sles: { 9: {}, 10: {}, 11: {} },

        }
      }
    }
  },


  /*** PHP ***/
  php: {
    short: "PHP",
    description: "Interpreter for the PHP language",
    programs: {
      php5: {
        description: "PHP",
        versions: {

          debian: {
            etch: { version: "5.2.0" },
            lenny: { version: "5.2.6" },
            squeeze: { version: "5.3.3" },
            wheezy: { version: "5.4.4" },
            jessie: { version: "5.6.9" },
            stretch: { version: "7.0" },
          },

          ubuntu: {
            lucid: { version: "5.3.2" },
            precise: { version: "5.3.10" },
            quantal: { version: "5.4.6" },
            raring: { version: "5.4.6" },
            saucy: { version: "5.5.3" },
            trusty: { version: "5.5.9" },
            xenial: { version: "7.0" },
            yakkety: { version: "7.0" },
            zesty: { version: "7.0" },
            artful: { version: "7.1" },
          },

          rhel: {
            4: { },
            5: { version: "5.1.6" },
            6: { version: "5.3.3" },
            7: { version: "5.4.16" },
          },

          sles: {
            9: { },
            10: { version: "5.2.5" },
            11: { version: "5.2.14" },
          },

        }
      }
    }
  },


  /*** Boost ***/
  boost: {
    short: "Boost",
    description: "Boost set of C++ libraries",
    programs: {
      boost: {
        versions: {

          debian: {
            etch: { version: "1.33.1" },
            lenny: { version: "1.34.1" },
            squeeze: { version: "1.42" },
            wheezy: { version: "1.49, 1.50" },
            jessie: { version: "1.55" },
            stretch: { version: "1.62" },
          },

          ubuntu: {
            lucid: {version: "1.40"},
            precise: {version: "1.46, 1.48"},
            quantal: {version: "1.49, 1.50"},
            raring: {version: "1.49, 1.53"},
            saucy: {version: "1.54, 1.53"},
            trusty: {version: "1.54"},
            utopic: {version: "1.55"},
            xenial: { version: "1.58" },
            yakkety: { version: "1.61" },
            zesty: { version: "1.63" },
            artful: { version: "1.63" }
          },

          rhel: {
            4: { version: "1.32" },
            5: { version: "1.33" },
            6: { version: "1.41" },
            7: { version: "1.53" },
          },

          sles: {
            11: { version: "1.36" },
          },

        }
      }
    }
  },


  /*** CMake ***/
  cmake: {
    short: "CMake",
    description: "Cross-platform, open-source build system.",
    programs: {
      cmake: {
        versions: {

          debian: {
            etch: { version: "2.4.5" },
            lenny: { version: "2.6.0" },
            squeeze: { version: "2.8.2" },
            wheezy: { version: "2.8.9" },
            jessie: { version: "3.0.2" },
            stretch: { version: "3.7.2" },
          },

          ubuntu: {
            lucid: {version: "2.8.0"},
            precise: {version: "2.8.7"},
            quantal: {version: "2.8.9"},
            raring: { version: "2.8.10" },
            saucy: { version: "2.8.11" },
            trusty: { version: "2.8.12" },
            utopic: { version: "2.8.12" },
            xenial: { version: "3.5.1" },
            yakkety: { version: "3.5.2" },
            zesty: { version: "3.7.2" },
            artful: { version: "3.7.2" }
          },

          rhel: {
            4: { },
            5: { version: "2.6.4" },
            6: { version: "2.6.4" },
            7: { version: "2.8.11" },
          },

          sles: {
            9: { },
            10: { },
            11: { version: "2.6.2" },
          },

        }
      }
    }
  },


  /*** Qt ***/
  qt: {
    short: "Qt",
    description: "Qt framework",
    programs: {
      qt: {
        versions: {

          /* qt4-default qt5-default */
          debian: {
            etch: { version: "4.2.1" },
            lenny: { version: "4.4.3" },
            squeeze: { version: "4.6.3" },
            wheezy: { version: "4.8.2" },
            jessie: { version: "5.3.2, 4.8.6" },
            stretch: { version: "5.7.1, 4.8.7" },
          },

          ubuntu: {
            lucid: { version: "4.6.2" },
            precise: { version: "4.8.1" },
            quantal: { version: "4.8.3" },
            raring: { version: "5.0.1, 4.8.3" },
            saucy: { version: "5.0.2, 4.8.4" },
            trusty: { version: "5.2.1, 4.8.5" },
            utopic: { version: "5.2.1, 4.8.6" },
            xenial: { version: "5.5.1, 4.8.7" },
            yakkety: { version: "5.6.1, 4.8.7" },
            zesty: { version: "5.7.1, 4.8.7" },
            artful: { version: "5.7.1, 4.8.7" }
          },

          rhel: {
            4: { version: "3.3.3" },
            5: { version: "3.3.6" },
            6: { version: "4.6.2" },
            7: { version: "4.8.3" },
          },

          sles: {
            9: { version: "3.3.1" },
            10: { version: "3.3.5" },
            11: { version: "4.6.3" },
          },

        }
      }
    }
  },

  /*** Perl ***/
  perl: {
    short: "Perl",
    description: "Interpreter for the Perl language",
    programs: {
      perl: {
        description: "Perl 5",
        versions: {

          debian: {
            etch: { version: "5.8.8" },
            lenny: { version: "5.10.0" },
            squeeze: { version: "5.10.1" },
            wheezy: { version: "5.14.2" },
            jessie: { version: "5.20.2" },
            stretch: { version: "5.24.1" },
          },

          ubuntu: {
            lucid: { version: "5.10.1" },
            precise: { version: "5.14.2" },
            quantal: { version: "5.14.2" },
            raring: { version: "5.14.2" },
            saucy: { version: "5.14.2" },
            trusty: { version: "5.18.2" },
            utopic: { version: "5.18.2" },
            xenial: { version: "5.22.1" },
            yakkety: { version: "5.22.2" },
            zesty: { version: "5.24.1" },
            artful: { version: "5.24.1" }
          },

          rhel: {
            4: { version: "5.8.5" },
            5: { version: "5.8.8" },
            6: { version: "5.10.1" },
            7: { version: "5.16.3" },
          },

          sles: {
            11: { version: "5.10.0" },
          },

        }
      }
    }
  },

  /*** glibc ***/
  glibc: {
    short: "glibc",
    description: "GNU C Library",
    programs: {
      glibc: {
        versions: {

          /* libc6 */
          debian: {
            etch: { version: "2.3.6" },
            lenny: { version: "2.7" },
            squeeze: { version: "2.11.3" },
            wheezy: { version: "2.13" },
            jessie: { version: "2.19" },
            stretch: { version: "2.24" },
          },

          ubuntu: {
            lucid: { version: "2.11.1" },
            precise: { version: "2.15" },
            quantal: { version: "2.15" },
            raring: { version: "2.17" },
            saucy: { version: "2.17" },
            trusty: { version: "2.18" },
            utopic: { version: "2.19" },
            xenial: { version: "2.23" },
            yakkety: { version: "2.24" },
            zesty: { version: "2.24" },
            artful: { version: "2.24" }
          },

          rhel: {
            4: { version: "2.3.4" },
            5: { version: "2.5" },
            6: { version: "2.12" },
            7: { version: "2.17" },
          },

          sles: {
            11: { version: "2.11.3" },
          },

        }
      }
    }
  },

  /*** Lua ***/
  lua: {
    short: "Lua",
    description: "The Lua Programming Language",
    programs: {
      lua51: {
        description: "Lua 5.1",
        versions: {

          /* lua5.1 */
          debian: {
            etch: { version: "5.1.1" },
            lenny: { version: "5.1.3" },
            squeeze: { version: "5.1.4" },
            wheezy: { version: "5.1.5" },
            jessie: { version: "5.1.5" },
            stretch: { version: "5.1.5" },
          },

          ubuntu: {
            lucid: { version: "5.1.4" },
            precise: { version: "5.1.4" },
            quantal: { },
            raring: { version: "5.1.5" },
            saucy: { version: "5.1.5" },
            trusty: { version: "5.1.5" },
            utopic: { version: "5.1.5" },
            xenial: { version: "5.1.5" },
            yakkety: { version: "5.1.5" },
            zesty: { version: "5.1.5" }
          },

          rhel: {
            4: { }, 5: { },
            6: { version: "5.1.4" },
            7: { version: "5.1.4" },
          },

          sles: {
            11: { version: "5.1.4" },
          },

        }
      },

      lua52: {
        description: "Lua 5.2",
        versions: {

          /* lua5.2 */
          debian: {
            etch: { },
            lenny: { },
            squeeze: { },
            wheezy: { version: "5.2.3" },
            jessie: { version: "5.2.3" },
            stretch: { version: "5.2.4" },
          },

          ubuntu: {
            lucid: { },
            precise: { version: "5.2.0" },
            quantal: { },
            raring: { version: "5.2.1" },
            saucy: { version: "5.2.2" },
            trusty: { version: "5.2.3" },
            utopic: { version: "5.2.3" },
            xenial: { version: "5.2.4" },
            yakkety: { version: "5.2.4" },
            zesty: { version: "5.2.4" },
            artful: { version: "5.2.4" }
          },

          rhel: {
            4: { }, 5: { },
            6: { },
            7: { },
          },

          sles: {
            11: { },
          },

        }
      },

      lua53: {
        description: "Lua 5.3",
        versions: {

          /* lua5.3 */
          debian: {
            etch: { },
            lenny: { },
            squeeze: { },
            wheezy: { },
            jessie: { version: "5.3.1" },
            stretch: { version: "5.3.3" },
          },

          ubuntu: {
            xenial: { version: "5.3.1" },
            yakkety: { version: "5.3.1" },
            zesty: { version: "5.3.3" },
            artful: { version: "5.3.3" }
          },

          rhel: {
            4: { }, 5: { },
            6: { },
            7: { },
          },

          sles: {
            11: { },
          },

        }
      }
    }

  },

  /*** Twisted ***/
  twisted: {
    short: "Twisted",
    description: "Twisted is an event-driven networking engine written in Python",
    programs: {
      twisted: {
        versions: {

          /* python-twisted */
          debian: {
            lenny: { version: "8.1" },
            squeeze: { version: "10.1" },
            wheezy: { version: "12.0" },
            jessie: { version: "14.0" },
            stretch: { version: "16.6" },
          },

          ubuntu: {
            lucid: {version: "10.0"},
            precise: {version: "11.0"},
            quantal: {version: "12.2"},
            saucy: {version: "13.0"},
            trusty: {version: "13.2"},
            utopic: {version: "13.2"},
            xenial: { version: "16.0" },
            yakkety: { version: "16.4" },
            zesty: { version: "16.6" },
            artful: { version: "16.6" },
          },

          rhel: {
            4: { },
            5: { },
            6: { version: "8.2" },
            7: { version: "12.2" },
          },

          sles: {
            11: { version: "8.0" },
          },

        }
      }
    }
  },

  /*** Go ***/
  golang: {
    short: "Go",
    description: "The Go programming language",
    programs: {
      golang: {
        versions: {

          /* golang */
          debian: {
            lenny: { },
            squeeze: { },
            wheezy: { version: "1.0.2" },
            jessie: { version: "1.3.3" },
            stretch: { version: "1.7" },
          },

          ubuntu: {
            lucid: { },
            precise: { version: "1" },
            quantal: { },
            saucy: { version: "1.1.2" },
            trusty: { version: "1.2.1" },
            utopic: { version: "1.2.1" },
            xenial: { version: "1.6" },
            yakkety: { version: "1.6.1" },
            zesty: { version: "1.7" },
            artful: { version: "1.8" }
          },

          rhel: {
            4: { },
            5: { },
            6: { },
            7: { },
          },

          sles: {
            11: { },
          },

        }
      }
    }
  },

  /*** Automake ***/
  automake: {
    short: "automake",
    description: "GNU Automake",
    programs: {
      automake: {
        versions: {

          debian: {
            lenny: { },
            squeeze: { },
            wheezy: { version: "1.11" },
            jessie: { version: "1.14.1" },
            stretch: { version: "1.15" },
          },

          ubuntu: {
            lucid: { },
            precise: { },
            quantal: { },
            saucy: { },
            trusty: { version: "1.14.1" },
            utopic: { },
            xenial: { version: "1.15" },
            yakkety: { version: "1.15" },
            zesty: { version: "1.15" },
            artful: { version: "1.15" }
          },

          rhel: {
            4: { },
            5: { },
            6: { version: "1.11.1" },
            7: { version: "1.13.4" },
          },

          sles: {
            11: { },
          },

        }
      }
    }
  },

  java: {
    short: "Java",
    description: "Java runtime environment",
    programs: {
      openjdk: {
        description: "OpenJDK",
        versions: {
          debian: {
            jessie: { version: "7" },
            stretch: { version: "8" },
            buster: { version: "11" },
            sid: { version: "11" }
          },

          ubuntu: {
            xenial: { version: "8" },
            bionic: { version: "11" },
            cosmic: { version: "11" },
            disco: { version: "11" },
            eoan: { version: "11" },
          },

          rhel: {
            5: { version: "7" },
            6: { version: "8" },
            7: { version: "11" },
          }
        }
      }
    }
  }

};


////// Distributions

var distros = {

  /// Debian
  debian: {
    description: "Debian",
    beta: "buster",
    current: "stretch",
    prev0: "jessie",
    prev1: "wheezy",
    versions: {

      etch: {
        short: "4.0",
        description: "etch"
      },
      lenny: {
        short: "5.0",
        description: "lenny"
      },
      squeeze: {
        short: "6.0",
        description: "squeeze"
      },
      wheezy: {
        short: "7.0",
        description: "wheezy"
      },
      jessie: {
        short: "8.0",
        description: "jessie"
      },
      stretch: {
        short: "9.0",
        description: "stretch"
      },
      buster: {
        short: "10.0",
        description: "buster"
      }

    },
    quirks: {
      nonfree: "In non-free"
    }
  },


  /// Ubuntu
  ubuntu: {
    description: "Ubuntu",
    current: "zesty",
    prev0: "xenial",
    prev1: "trusty",
    beta: "artful",
    versions: {

      lucid: {
        short: "10.04LTS",
        description: "10.04 LTS Lucid Lynx"
      },
      precise: {
        short: "12.04LTS",
        description: "12.04 LTS Precise Pangolin"
      },
      quantal: {
        short: "12.10",
        description: "12.10 Quantal Quetzal"
      },
      raring: {
        short: "13.04",
        description: "13.04 Raring Ringtail"
      },
      saucy: {
        short: "13.10",
        description: "13.10 Saucy Salamander"
      },
      trusty: {
        short: "14.04LTS",
        description: "14.04 LTS Trusty Tahr"
      },
      utopic: {
        short: "14.10",
        description: "14.10 Utopic Unicorn"
      },
      xenial: {
        short: "16.04LTS",
        description: "16.04 LTS xenial"
      },
      yakkety: {
        short: "16.10",
        description: "16.10 yakkety"
      },
      zesty: {
        short: "17.04",
        description: "17.04 zesty"
      },
      artful: {
        short: "17.10",
        description: "artful"
      }
    },
    quirks: {
      universe: "In universe"
    }
  },


  /// RedHat Enterprise Linux (and/or CentOS)
  rhel: {
    styleClass: "redhat",
    description: "RHEL",
    current: "7",
    prev0: "6",
    prev1: "5",
    versions: {

      5: {
        description: "5"
      },
      6: {
        description: "6"
      },
      7: {
        description: "7"
      },


    },
    quirks: {
      epel: "In EPEL"
    }
  },


  /// SuSE Enterprise Linux Server
  sles: {
    styleClass: "suse",
    description: "SLES",
    current: "11",
    prev0: "10",
    prev1: "9",
    versions: {

      9: {
        description: "9"
      },
      10: {
        description: "10"
      },
      11: {
        description: "11"
      },

    }
  },


};
