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
            etch: {
              version: "1.8.5"
            },
            lenny: {
              version: "1.8.7 p72"
            },
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
            4: { version: "1.8.1" },
            5: { version: "1.8.5" },
            6: { version: "1.8.7 p352" },
          },

          sles: {
            9: { version: "1.8.1" },
            10: { version: "1.8.6 p369" },
            11: { version: "1.8.7 p357" },
          },

        }
      },
      ruby19: {
        description: "Ruby 1.9",
        versions: {

          debian: {
            etch: {
              version: "1.9.0 p0"
            },
            lenny: {
              version: "1.9.0 p0",
            },
            squeeze: {
              version: "1.9.2 p0",
            },
            wheezy: {
              version: "1.9.3 p194"
            },
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

          rhel: { 4: {}, 5: {}, 6: {} },

          sles: { 9: {}, 10: {}, 11: {} },

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

          /* First version should be the default version. */

          debian: {
            etch: { version: "2.4.4, 2.5.0" },
            lenny: { version: "2.4.6, 2.5.2" },
            squeeze: { version: "2.5.5, 2.6.6" },
            wheezy: { version: "2.7.3, 2.6.8" },
          },

          ubuntu: {
            lucid: { version: "2.5.5, 2.6.6" },
            precise: { version: "2.7.3" },
            quantal: { version: "2.7.3" },
            raring: { version: "2.7.3" },
          },

          rhel: {
            4: { version: "2.3.4" },
            5: { version: "2.4.3" },
            6: { version: "2.6.6" },
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
          },

          ubuntu: {
            lucid: { version: "3.1.2" },
            precise: { version: "3.2.3" },
            quantal: { version: "3.2.3" },
            raring: { version: "3.3.0" },
          },

          rhel: { 4: {}, 5: {}, 6: {} },

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
        description: "PHP 5",
        versions: {

          debian: {
            etch: { version: "5.2.0" },
            lenny: { version: "5.2.6" },
            squeeze: { version: "5.3.3" },
            wheezy: { version: "5.4.4" },
          },

          ubuntu: {
            lucid: { version: "5.3.2" },
            precise: { version: "5.3.10" },
            quantal: { version: "5.4.6" },
            raring: { version: "5.4.6" },
          },

          rhel: {
            4: { },
            5: { version: "5.1.6" },
            6: { version: "5.3.3" },
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
          },

          ubuntu: {
            lucid: {version: "1.40"},
            precise: {version: "1.46, 1.48"},
            quantal: {version: "1.49, 1.50"},
            raring: {version: "1.49, 1.50"},
          },

          rhel: {
            4: { version: "1.32" },
            5: { version: "1.33" },
            6: { version: "1.41" },
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
          },

          ubuntu: {
            lucid: {version: "2.8.0"},
            precise: {version: "2.8.7"},
            quantal: {version: "2.8.9"},
            raring: { version: "2.8.10" },
          },

          rhel: {
            4: { },
            5: { version: "2.6.4" },
            6: { version: "2.6.4" },
          },

          sles: {
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

          debian: {
            etch: { version: "4.2.1" },
	    lenny: { version: "4.4.3" },
            squeeze: { version: "4.6.3" },
            wheezy: { version: "4.8.2" },
          },

          ubuntu: {
            lucid: { version: "4.6.2" },
            precise: { version: "4.8.1" },
            quantal: { version: "4.8.3" },
            raring: { version: "4.8.3" },
          },

          rhel: {
            4: { version: "3.3.3" },
            5: { version: "3.3.6" },
            6: { version: "4.6.2" },
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
          },

          ubuntu: {
            lucid: { version: "5.10.1" },
            precise: { version: "5.14.2" },
            quantal: { version: "5.14.2" },
            raring: { version: "5.14.2" },
          },

          rhel: {
            4: { version: "5.8.5" },
            5: { version: "5.8.8" },
            6: { version: "5.10.1" },
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

          debian: {
            etch: { version: "2.3.6" },
            lenny: { version: "2.7" },
            squeeze: { version: "2.11.3" },
            wheezy: { version: "2.13" },
          },

          ubuntu: {
            lucid: { version: "2.11.1" },
            precise: { version: "2.15" },
            quantal: { version: "2.15" },
            raring: { version: "2.16" },
          },

          rhel: {
            4: { version: "2.3.4" },
            5: { version: "2.5" },
            6: { version: "2.12" },
          },

          sles: {
            11: { version: "2.11.3" },
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
    prev1: "etch",
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

      4: {
        description: "4"
      },
      5: {
        description: "5"
      },
      6: {
        description: "6"
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
