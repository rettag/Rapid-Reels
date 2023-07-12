import React from 'react'


export const MASTER_SWITCH = {
    "@sjsu.edu": {
        subdomain: "sjsuspartans",
        linkId: "sjsu-athletics",
        siteId: "ev_sjsu-athletics",
        sellerId: 3059244
    },
    //VCU
    "@vcu.edu": {
        "key": {
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan": {
            subdomain: "vcutickets",
            linkId: "vcu",
            siteId: "ev_vcu",
            sellerId: 3058185
        },
        "info": {
            name: "Virginia Commonwealth University",
            shorthand: "VCU", 
            mascot: "Rams",
            primary_color: "rgb(0,0,0)",
            secondary_color: "rgb(253,178,43)",
            region: {
                latitude: 37.5485,
                longitude: -77.4534,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                }
        },
    }, 
    //Big 10 Schools
    "@umich.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan": {
            subdomain: "mgoblue",
            linkId: "umichse",
            siteId: "ev_umichse",
            sellerId: 3058084
        },
        "info": {
            name: "University of Michigan",
            shorthand: "UMich", 
            mascot: "Wolverines",
            primary_color: "rgb(0,39,76)",
            secondary_color: "rgb(255,203,5)",
            region: {
                latitude: 42.2780,
                longitude: -83.7382,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },

    "@iu.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan": {
            subdomain: "iuhoosiers",
            linkId: "indiana",
            siteId: "ev_indiana",
            sellerId: 3057724
        },
        "info": {
            name: "University of Indiana",
            shorthand: "IU", 
            mascot: "Hoosiers",
            primary_color: "rgb(153, 0, 0)",
            secondary_color: "rgb(238, 237, 235)",
            region: {
                latitude: 39.1670,
                longitude: -86.5260,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                
            }
        }
    },
    "@umd.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" :  {
            subdomain: "umterps", 
            linkId: "umd",
            siteId: "ev_umd",
            sellerId: 3057785
        },
        "info": {
            name: "University of Maryland",
            shorthand: "UMD", 
            mascot: "Terrapins",
            primary_color: "rgb(224, 58, 62) ",
            secondary_color: "rgb(255, 213, 32)",
            region: {
                latitude: 38.9869,
                longitude: -76.9426,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@msu.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "msuspartans",
            linkId: "michst",
            siteId: "ev_michst",
            sellerId: 3057855
        }, 
        "info": {
            name: "Michigan State University",
            shorthand: "MSU", 
            mascot: "Spartans",
            primary_color: "rgb(224, 58, 62) ",
            secondary_color: "rgb(255, 213, 32)",
            region: {
                latitude: 42.7018,
                longitude: -84.4822,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@osu.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info":{
            region: {
                latitude: 40.0057,
                longitude: -83.0287,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@psu.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info": {
            region: {
                latitude: 40.7982,
                longitude: -77.8599,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@rutgers.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "scarletknights",
            linkId: "rutgers",
            siteId: "ev_rutgers",
            sellerId: 3057885
        },
        "info": {
            name: "Rutgers University",
            shorthand: "Rutgers", 
            mascot: "Scarlet Knights",
            primary_color: "rgb(204,0,51)",
            secondary_color: "rgb(95,106,114)",
            region: {
                latitude: 40.5008,
                longitude: -74.4474,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@illinois.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "fightingillini",
            linkId: "illinois",
            siteId: "ev_illinois",
            sellerId: 3057774
        }, 
        "info": {
            name: "Illinois University",
            shorthand: "UI", 
            mascot: "Fighting Illini",
            primary_color: "rgb(19, 41, 75)",
            secondary_color: "rgb(232, 74, 39)",
            region: {
                latitude: 40.1019,
                longitude: -88.2272,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@uiowa.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "hawkeyesports",
            linkId: "uiowa",
            siteId: "ev_uiowa",
            sellerId: 3057803
        }, 
        "info": {
            name: "Iowa University",
            shorthand: "UIowa", 
            mascot: "Hawkeyes",
            primary_color: "rgb(0, 0, 0)",
            secondary_color: "rgb(255, 205, 0)",
            region: {
                latitude: 41.6605,
                longitude: -91.5363,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@umn.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "gophersports",
            linkId: "uminn",
            siteId: "ev_uminn",
            sellerId: 3058645
        },
        "info": {
            name: "Minnesota University",
            shorthand: "UMinn", 
            mascot: "Gophers",
            primary_color: "rgb(122,0,25)",
            secondary_color: "rgb(255,204,51)",
            region: {
                latitude: 44.9737,
                longitude: -93.2351,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 

    },
    "@unl.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "huskers",
            linkId: "huskers", 
            siteId: "ev_huskers",
            sellerId: 3057772
        }, 
        "info": {
            name: "University of Nebraska",
            shorthand: "UNL", 
            mascot: "Cornhuskers",
            primary_color: "rgb(227, 25, 55)",
            secondary_color: "rgb(253,242,217)",
            region: {
                latitude: 40.8202,
                longitude: -96.7005,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    }, 
    "@northwestern.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "nusports",
            linkId: "nwu",
            siteId: "ev_nwu",
            sellerId: 3058034
        }, 
        "info": {
            name: "University of Nebraska",
            shorthand: "UNL", 
            mascot: "Cornhuskers",
            primary_color: "rgb(227, 25, 55)",
            secondary_color: "rgb(253,242,217)",
            region: {
                latitude: 42.0571,
                longitude: -87.6750,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
        
    },
    "@purdue.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "purduesports",
            linkId: "purdue",
            siteId: "ev_purdue",
            sellerId: 3057791
        }, 
        "info": {
            name: "Purdue University",
            shorthand: "Purdue", 
            mascot: "Boilermakers",
            primary_color: "rgb(206, 184, 136) ",
            secondary_color: "rgb(0, 0, 0)",
            region: {
                latitude: 40.4240,
                longitude: -86.9290,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
        
    },
    "@wisc.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "uwbadgers",
            linkId: "wisc",
            siteId: "ev_wisc",
            sellerId: 3057817
        }, 
        "info": {
            name: "University of Wiconsin-Madison",
            shorthand: "UWM", 
            mascot: "Cornhuskers",
            primary_color: "rgb (197, 5, 12)",
            secondary_color: "rgb(255,255,255)",
            region: {
                latitude: 43.0768,
                longitude: -89.4128,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    //SEC Schools 
    "@auburn.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "auburntigers",
            linkId: "auburn", 
            siteId: "ev_auburn",
            sellerId: 3057799
        }, 
        "info": {
            name: "University of Auburn",
            shorthand: "AU", 
            mascot: "Tigers",
            primary_color: "rgb(12,35,64)",
            secondary_color: "rgb(232,119,34)",
            region: {
                latitude: 32.6025,
                longitude: -85.4883,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
                
                
        } 
        
    }, 
    "@lsu.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "lsusports",
            linkId: "lsu", 
            siteId: "ev_lsu",
            sellerId: 3058048
        }, 
        "info": {
            name: "Louisiana State University",
            shorthand: "LSU", 
            mascot: "Tigers",
            primary_color: "rgb(70, 29, 124)",
            secondary_color: "rgb(253, 208, 35)",
            region: {
                latitude: 30.4133,
                longitude: -91.1800,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@msstate.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "hailstate",
            linkId: "msst", 
            siteId: "ev_msst",
            sellerId: 3057881
        }, 
        "info": {
            name: "Mississippi State University",
            shorthand: "UMiss", 
            mascot: "Bulldogs",
            primary_color: "rgb(102,0,0)",
            secondary_color: "rgb(255,255,255)",
            region: {
                latitude: 33.4578,
                longitude: -88.7943,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@tamu.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "12thmanfoundation",
            linkId: "tamu", 
            siteId: "ev_tamu",
            sellerId: 3058530
        }, 
        "info": {
            name: "Texas A&M University",
            shorthand: "A&M", 
            mascot: "Aggies",
            primary_color: "rgb(80,0,0) ",
            secondary_color: "rgb(255,255,255)",
            region: {
                latitude: 30.6100,
                longitude: -96.3499,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
        
    }, 
    "@ua.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "rolltide",
            linkId: "ubama", 
            siteId: "ev_ubama",
            sellerId: 3057658
        }, 
        "info": {
            name: "Alabama University",
            shorthand: "Bama", 
            mascot: "Crimson Tide",
            primary_color: "rgb(130, 138, 143) ",
            secondary_color: "rgb(255,255,255)",
            region: {
                latitude: 33.2098,
                longitude: -87.5465,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    }, 
    "@uark.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "arkansasrazorbacks",
            linkId: "arkansas", 
            siteId: "ev_arkansas",
            sellerId: 3057741
        }, 
        "info": {
            name: "University of Arkansas",
            shorthand: "Uark", 
            mascot: "Razorbacks",
            primary_color: "rgb(157, 34, 53) ",
            secondary_color: "rgb(255,255,255)",
            region: {
                latitude: 36.0686,
                longitude: -94.1760,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@ufl.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info":{
            region: {
                latitude: 29.6499,
                longitude: -82.3470,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@uga.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "georgiadogs",
            linkId: "uga",
            siteId: "ev_uga",
            sellerId: 3057797
        }, 
        "info": {
            name: "University of Georgia",
            shorthand: "UGA", 
            mascot: "Bulldogs",
            primary_color: "rgb(186, 12, 47) ",
            secondary_color: "rgb(0, 0, 0)",
            region: {
                latitude: 33.9481,
                longitude: -83.3773,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@uky.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info":{
            region: {
                latitude: 38.0316,
                longitude: -84.5036,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    }, 
    "@olemiss.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "olemisssports",
            linkId: "olemiss",
            siteId: "ev_olemiss",
            sellerId: 3057553
        }, 
        "info": {
            name: "University of Mississipi",
            shorthand: "Ole Miss", 
            mascot: "Rebels",
            primary_color: "rgb(204, 9, 47) ",
            secondary_color: "rgb(22, 43, 72)",
            region: {
                latitude: 34.3659,
                longitude: -89.5393,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 

    }, 
    "@missouri.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info":{
            region: {
                latitude: 38.9406,
                longitude: -92.3276,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    }, 
    "@sc.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info": {
            region: {
                latitude: 33.9972,
                longitude: -81.0275,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    }, 
    "@utk.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info":{
            region: {
                latitude: 35.9558,
                longitude: -83.9240,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    }, 
    "@vanderbilt.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "vucommodores",
            linkId: "vanderbilt-athletics",
            siteId: "ev_vanderbilt-athletics",
            sellerId: 3059240
        }, 
        "info": {
            name: "University of Vanderbilt",
            shorthand: "Vandy", 
            mascot: "Commodores",
            primary_color: "rgb(0 ,0 ,0) ",
            secondary_color: "rgb(168, 153, 110)",
            region: {
                latitude: 36.1443,
                longitude: -86.8030,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    //Pac-12
    "@usc.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info":true
        },
        "paciolan" : {
            subdomain: "usctrojans",
            linkId: "usc",
            siteId: "ev_usc",
            sellerId: 3057914
        }, 
        "info": {
            name: "University of Southern California",
            shorthand: "USC", 
            mascot: "Trojans",
            primary_color: "rgb (153, 27, 30) ",
            secondary_color: "rgb(255, 199, 44)",
            region: {
                latitude: 34.0208,
                longitude: -118.2850,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@ucla.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "ucla",
            linkId: "ucla-multi",
            siteId: "ev_ucla-multi",
            sellerId: 3059051
        }, 
        "info": {
            name: "University of California-LA",
            shorthand: "UCLA", 
            mascot: "Bruins",
            primary_color: "rgb (45,104,96) ",
            secondary_color: "rgb(242,169,0)",
            region: {
                latitude: 34.0689,
                longitude: -118.4452,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    //for students, faculty have @economics.utah.edu for example
    "@umail.utah.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info":{
            region: {
                latitude: 40.7649,
                longitude: -111.8421,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@stanford.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "gostanford",
            linkId: "stanford",
            siteId: "ev_stanford",
            sellerId: 3057640
        }, 
        "info": {
            name: "Stanford University",
            shorthand: "Stanford", 
            mascot: "Trees",
            primary_color: "rgb (140, 21, 21) ",
            secondary_color: "rgb(77, 79, 83)",
            region: {
                latitude: 37.4275,
                longitude: -122.1697,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@uw.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "gohuskies",
            linkId: "washington",
            siteId: "ev_washington",
            sellerId: 3058424
        }, 
        "info": {
            name: "University of Washington",
            shorthand: "UW", 
            mascot: "Huskies",
            primary_color: "rgb (51, 0, 111)",
            secondary_color: "rgb (232, 211, 162)",
            region: {
                latitude: 47.6553,
                longitude: -122.3035,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@berkeley.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "calbears",
            linkId: "cal",
            siteId: "ev_cal",
            sellerId: 3057761
        }, 
        "info": {
            name: "University of California-Berkeley",
            shorthand: "UCB", 
            mascot: "Golden Bears",
            primary_color: "rgb (0, 50, 98) ",
            secondary_color: "rgb(253, 181, 21)",
            region: {
                latitude: 37.8719,
                longitude: -122.2585,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@wsu.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "wsucougars",
            linkId: "washst",
            siteId: "ev_washst",
            sellerId: 3057652
        }, 
        "info": {
            name: "Washington State University",
            shorthand: "WSU",
            mascot: "Cougars",
            primary_color: "rgb(152, 30, 50) ",
            secondary_color: "rgb(94, 106, 113)",
            region: {
                latitude: 46.7318,
                longitude: -117.1543,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@arizona.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "arizonawildcats",
            linkId: "uaz-ts",
            siteId: "ev_uaz-ts",
            sellerId: 3057835
        }, 
        "info": {
            name: "Arizona University",
            shorthand: "AU",
            mascot: "Wildcats",
            primary_color: "rgb(204, 0, 51) ",
            secondary_color: "rgb(0, 51, 102)",
            region: {
                latitude: 32.2287,
                longitude: -110.9564,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@uoregon.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info":{
            region: {
                latitude: 44.0448,
                longitude: -123.0726,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@asu.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info":{
            region: {
                latitude: 33.4237,
                longitude: -111.9391,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@Colorado.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "cubuffs",
            linkId: "colorado",
            siteId: "ev_colorado",
            sellerId: 3057964
        }, 
        "info": {
            name: "Univeristy of Colorado Boulder",
            shorthand: "Colorado",
            mascot: "Buffaloes",
            primary_color: "rgb(207, 184, 124) ",
            secondary_color: "rgb(0, 0, 0)",
            region: {
                latitude: 40.0076,
                longitude: -105.2659,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@oregonstate.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "osubeavers",
            linkId: "oregonst",
            siteId: "ev_oregonst",
            sellerId: 3057936
        }, 
        "info": {
            name: "Oregon Sate University",
            shorthand: "OSU",
            mascot: "Beavers",
            primary_color: "rgb(220, 68,5) ",
            secondary_color: "rgb(0, 0, 0)",
            region: {
                latitude: 44.5635,
                longitude: -123.2797,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    //ACC
    "@bc.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "bceagles",
            linkId: "bostoncoll",
            siteId: "ev_bostoncoll",
            sellerId: 3057766
        }, 
        "info": {
            name: "Boston College",
            shorthand: "BC",
            mascot: "Eagles",
            primary_color: "rgb(115, 0, 10) ",
            secondary_color: "rgb(203, 182, 119)",
            region: {
                latitude: 42.3359,
                longitude: -71.1683,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@clemson.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info":{
            region: {
                latitude: 34.6781,
                longitude: -82.8409,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@duke.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "goduke",
            linkId: "dukeathletics",
            siteId: "ev_duekathletics",
            sellerId: 3059162
        }, 
        "info": {
            name: "Duke University",
            shorthand: "Duke",
            mascot: "Blue Devils",
            primary_color: "rgb(0, 83, 155) ",
            secondary_color: "rgb(1, 33, 105)",
            region: {
                latitude: 36.0014,
                longitude: -78.9382,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@fsu.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "seminoles",
            linkId: "fsuse",
            siteId: "ev_fsuse",
            sellerId: 3057988
        }, 
        "info": {
            name: "Florida Sate University",
            shorthand: "FSU",
            mascot: "Seminoles",
            primary_color: "rgb(120, 47, 64) ",
            secondary_color: "rgb(206, 184, 136)",
            region: {
                latitude: 30.4422,
                longitude: -84.2980,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@gatech.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "ramblinwreck", //this is so weird
            linkId: "gatech",
            siteId: "ev_gatech",
            sellerId: 3057954
        }, 
        "info": {
            name: "Georgia Tech University",
            shorthand: "Gatech",
            mascot: "Yellow Jackets",
            primary_color: "rgb(179,163,105) ",
            secondary_color: "rgb(0,48,87)",
            region: {
                latitude: 33.7756,
                longitude: -84.3963,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    
    "@louisville.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false, 
            "has_info": true
        },
        "info":{
            region: {
                latitude: 38.2155,
                longitude: -85.7585,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@miami.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "miamihurricanes",
            linkId: "miami",
            siteId: "ev_miami",
            sellerId: 3057587
        }, 
        "info": {
            name: "Miami University",
            shorthand: "Miami",
            mascot: "Hurricanes",
            primary_color: "rgb(244, 115, 33)",
            secondary_color: "rgb(0,80,48)",
            region: {
                latitude: 25.7215,
                longitude: -80.2793,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@unc.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "osubeavers",
            linkId: "oregonst",
            siteId: "ev_oregonst",
            sellerId: 3057936
        }, 
        "info": {
            name: "University of North Carolina",
            shorthand: "UNC",
            mascot: "Tarheels",
            primary_color: "rgb(123, 175, 212) ",
            secondary_color: "rgb(255, 255, 255)",
            region: {
                latitude: 35.9052,
                longitude: -79.0469,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
                
                
        } 
    },
    "@ncsu.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "goheels",
            linkId: "unc",
            siteId: "ev_unc",
            sellerId: 3057795
        }, 
        "info": {
            name: "North Carolina State University",
            shorthand: "NCSU",
            mascot: "Wolfpack",
            primary_color: "rgb(204, 0, 0) ",
            secondary_color: "rgb(0, 0, 0)",
            region: {
                latitude: 35.7847,
                longitude: -78.6821,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@nd.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "und",
            linkId: "notre-dame",
            siteId: "ev_notre-dame",
            sellerId: 3057787
        }, 
        "info": {
            name: "Notre Dame University",
            shorthand: "NDU",
            mascot: "Fighting Irish",
            primary_color: "rgb(12, 35, 64) ",
            secondary_color: "rgb(201, 151, 0)",
            region: {
                latitude: 41.7032,
                longitude: -86.2382,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@pitt.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "pittsburghpanthers",
            linkId: "pitt",
            siteId: "ev_pitt",
            sellerId: 3057879
        }, 
        "info": {
            name: "Pittsburgh University",
            shorthand: "Pitt",
            mascot: "Panthers",
            primary_color: "rgb(0, 53, 148) ",
            secondary_color: "rgb(255, 184, 28)",
            region: {
                latitude: 40.4444,
                longitude: -79.9608,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@syr.edu": {
        "key": {
            "has_ticketmaster": true, 
            "has_paciolan": false,
            "has_info": true
        },
        "info":{
            region: {
                latitude: 43.0379,
                longitude: -76.1352,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        }
    },
    "@virginia.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "virginiasports",
            linkId: "virginia",
            siteId: "ev_virginia",
            sellerId: 3057563
        }, 
        "info": {
            name: "Virginia University",
            shorthand: "VU",
            mascot: "Cavaliers",
            primary_color: "rgb(35, 45, 75) ",
            secondary_color: "rgb(248, 76, 30)",
            region: {
                latitude: 38.0336,
                longitude: -78.5070,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@vt.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "hokiesports",
            linkId: "vtech",
            siteId: "ev_vtech",
            sellerId: 3058250
        }, 
        "info": {
            name: "Virginia Tech University",
            shorthand: "VTU",
            mascot: "Hokies",
            primary_color: "rgb(99, 0, 49) ",
            secondary_color: "rgb(207, 69, 32)",
            region: {
                latitude: 37.2286,
                longitude: -80.4234,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
    "@wfu.edu": {
        "key": {
            "has_ticketmaster": false, 
            "has_paciolan": true, 
            "has_info": true
        },
        "paciolan" : {
            subdomain: "godeacs",
            linkId: "wfu",
            siteId: "ev_wfu",
            sellerId: 3058149
        }, 
        "info": {
            name: "Wake Forest University",
            shorthand: "WFU",
            mascot: "Beavers",
            primary_color: "rgb(158, 126, 56)",
            secondary_color: "rgb(0, 0, 0)",
            region: {
                latitude: 36.1350,
                longitude: -80.2794,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
        } 
    },
}