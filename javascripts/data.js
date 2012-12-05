
////// Programs & Versions

var version_data = {

  /*** Ruby ***/
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
          },
					ubuntu: {
            lucid: { 
							version: "1.8.7 p249" 
						},
            precise: { 
							version: "1.8.7 p352" 
						},
            quantal: { 
							version: "1.8.7 p358" 
						},
            raring: { 
							version: "1.8.7 p358" 
						},
					},
          rhel: {
            6: { version: "1.8.7" },
            5: { version: "1.8.5" }
          }
        }
      },
      ruby19: {
        description: "Ruby 1.9",
        versions: {
          debian: {
            squeeze: {
              version: "1.9.2 p0",
            },
            wheezy: {
              version: "1.9.3 p194"
            }
          },
					ubuntu: {
            lucid: { 
							version: "1.9.1 p378" 
						},
            precise: { 
							version: "1.9.3 p0" 
						},
            quantal: { 
							version: "1.9.3 p194" 
						},
            raring: { 
							version: "1.9.3 p194" 
						},
					},
          rhel: { 6: {} }
        }
      }
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

          debian: {
            squeeze: { version: "2.5.5, 2.6.6" },
            wheezy: { version: "2.7.3, 2.6.8" },
          },

          ubuntu: {
            lucid: { version: "2.5.5, 2.6.6" },
            precise: { version: "2.5.5, 2.6.6" },
            quantal: { version: "2.7.3" },
          },

          rhel: {
            6: { version: "2.6.6" },
            5: { version: "2.4.3" },
          },

        }
      },
      python3: {
        description: "Python 3.x",
        versions: {

          debian: {
            squeeze: { version: "3.1.3" },
            wheezy: { version: "3.2.3" },
          },

          ubuntu: {
            lucid: { version: "3.1.2" },
            precise: { version: "3.2.3" },
            quantal: { version: "3.2.3" },
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
            squeeze: { version: "1.42" },
            wheezy: { version: "1.49, 1.50" },
          },

					ubuntu: {
						lucid: {version: "1.40"},
						precise: {version: "1.46, 1.48"},
						quantal: {version: "1.49, 1.50"},
						raring: {version: "1.49, 1.50"},
					},

        }
      }
    }
  },


};


////// Distributions

var distros = {

  /// Debian
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


  /// Ubuntu
  ubuntu: {
    description: "Ubuntu",
    current: "quantal",
    prev0: "precise",
    prev1: "lucid",
    beta: "raring",
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

    },
    quirks: {
      universe: "In universe"
    }
  },


  /// RedHat Enterprise Linux (and/or CentOS)
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
      5: {
        description: "5"
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
