
var version_data = {
  ruby: {
    short: "Ruby",
    description: "Interpreter for the Ruby language",
    programs: {
      ruby18: {
        description: "Ruby 1.8",
        package: "ruby1.8-full",
        versions: {
          debian: {
            squeeze: {
              version: "1.8.7 p302"
            },
            wheezy: {
              version: "1.8.7 p358"
            },
          }
        }
      },
      ruby19: {
        description: "Ruby 1.9",
        versions: {
          debian: {
            squeeze: {
              version: "1.9.3",
            },
            wheezy: {
              version: "1.9.3"
            }
          }
        }
      }
    }
  },


  python: {
    short: "Python",
    description: "Interpreter for the Python language",
    programs: {
      python2: {
        description: "Python 2.x",
        versions: {
          debian: {
            squeeze: { version: "2.5.5/2.6.6" },
          }
        }
      }
    }
  }
};

var distros = {
  debian: {
    description: "Debian",
    beta: "wheezy",
    current: "squeeze",
    prev0: "lenny",
    versions: {
      lenny: {
        short: "5.0",
      },
      squeeze: {
        short: "6.0",
        description: "squeeze"
      },
      wheezy: {
        short: "7.0",
        description: "wheezy"
      },
    },
    quirks: {
      nonfree: "In non-free"
    }
  },
  ubuntu: {
    description: "Ubuntu",
    current: "quantal",
    prev0: "precise",
    prev1: "lucid",
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
      }
    },
    quirks: {
      universe: "In universe"
    }
  },
  rhel: {
    styleClass: "redhat",
    description: "RHEL",
    current: "6",
    prev0: "5",
    prev1: "4",
    versions: {
      6: {
        description: "6"
      },
      squeeze: {
        description: "6.0 (squeeze)"
      },
    },
    quirks: {
      epel: "In EPEL"
    }
  },
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
  }
};
