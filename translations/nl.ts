export default {
    notFound: {
        title: "404 - Pagina niet gevonden",
        description: "Het lijkt erop dat je verdwaald bent. De pagina die je zoekt bestaat niet.",
        goHome: "Ga terug naar de homepage"
    },
    navbar: {
        projects: "Projecten",
        about: "Over mij",
        contact: "Contact",
        travel: "Reizen"
    },
    workInProgress: {
        title: "Werk in uitvoering",
        description: "Ik ben momenteel bezig met het bouwen van mijn portfolio - nieuwe inhoud, projecten en secties worden binnenkort toegevoegd. Blijf op de hoogte!",
    },
    hero: {
        title: "DYLAN",
        subtitle: "Software Developer uit Nederland met een passie voor het verkennen van nieuwe plekken.",
        travel: "Bezocht: NL • BE • DE • LU • AT • UK • ES • PT • US • MX • CL • CW • HR • SK",
        projectsButton: "Bekijk Projecten",
        aboutButton: "Over Mij"
    },
    about: {
        label: "Over",
        title: "Een beetje over mij.",
        paragraph1:
            "Ik ben Dylan, een software developer uit Nederland. Ik geniet ervan om schone, functionele digitale ervaringen te bouwen en nieuwe plekken over de hele",
        paragraph2:
            "Ik studeer momenteel Informatica aan Avans. Ik werk graag aan projecten die logica, design en het oplossen van echte problemen combineren.",
        focus: {
            label: "Focus",
            text: "Full-stack development"
        },
        approach: {
            label: "Aanpak",
            text: "Simpel"
        },
        lifestyle: {
            label: "Lifestyle",
            text: "Reizen"
        },
        cta: "Bekijk Mijn Werk"
    },
    projects: {
        label: "Projecten",
        title: "Geselecteerd Werk",
        description: "Een paar projecten waar ik aan heb gewerkt.",
        link: "Bekijk Project →",

        list: [
            {
                title: "Poker Dice (Kotlin/Spring)",
                description: "Een multi-module backend met JWT-authenticatie, Dockerized Postgres en een clean domeinstructuur.",
                tags: ["Kotlin", "Spring Boot", "Postgres", "Docker"],
                link: "#"
            },
            {
                title: "FlexFlow - Workforce Scheduling Platform",
                description: "Een volledig cross-platform plannings- en personeelsbeheersysteem met een .NET-backend, Nuxt/Vue-webapp en native iOS/Android-apps.",
                tags: ["C# / .NET", "Nuxt.js", "Vue", "Swift", "Kotlin"],
                link: "#"
            },
            {
                title: "HetKoppel Webpage Builder",
                description: "Een aangepaste websitebouwer ontwikkeld voor HetKoppel, waarmee dynamische pagina's kunnen worden gemaakt, content kan worden beheerd en herbruikbare componenten kunnen worden gebruikt met Laravel.",
                tags: ["Laravel", "PHP", "Blade", "MySQL", "JavaScript"],
                link: "#"
            },
            {
                title: "Household Budget Manager",
                description: "Een React- en Next.js-toepassing gebouwd met Firebase voor het beheren van gedeelde huishoudelijke uitgaven, budgettering en realtime gegevenssynchronisatie.",
                tags: ["React", "Next.js", "Firebase", "TypeScript"],
                link: "#"
            }
        ]
    },
    skills: {
        label: "Skills",
        title: "Skills waar ik mee heb gewerkt",
        list: [
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "React" },
            { name: "Next.js" },
            { name: "Kotlin" },
            { name: "Spring Boot" },
            { name: "C# / .NET" },
            { name: "Vue.js" },
            { name: "Laravel" },
            { name: "PHP" },
        ],
    },
    countries: {
        label: "Landen",
        title: "Landen die ik heb bezocht",
        list: [
            { code: "NL", flag: "🇳🇱" },
            { code: "DE", flag: "🇩🇪" },
            { code: "BE", flag: "🇧🇪" },
            { code: "LU", flag: "🇱🇺" },
            { code: "AT", flag: "🇦🇹" },
            { code: "UK", flag: "🇬🇧" },
            { code: "ES", flag: "🇪🇸" },
            { code: "PT", flag: "🇵🇹" },
            { code: "HR ", flag: "🇭🇷" },
            { code: "SK", flag: "🇸🇰" },
            { code: "US", flag: "🇺🇸" },
            { code: "MX", flag: "🇲🇽" },
            { code: "CL", flag: "🇨🇱" },
            { code: "CW", flag: "🇨🇼" },
        ]
    },
    filter: {
        oldest: "Oudste",
        newest: "Nieuwste"
    },
    timeline: {
        countries: "landen",
        cities: "steden",
        tripTimeline: "Reisoverzicht",
        destinations: "Bestemmingen"
    },
    travel: {
        us: {
            title: "Verenigde Staten",
            newYork: "New York City",
            newJersey: "New Jersey",
            newYorkTrip: {
                description: "Een schoolreis naar New York met een ijshockeywedstrijd in New Jersey."
            }
        },

        es: {
            title: "Spanje",

            icodDeLosVinos: "Icod de los Vinos",
            playaDeLasAmericas: "Playa de las Américas",
            losCristianos: "Los Cristianos",
            costaAdeje: "Costa Adeje",
            adeje: "Adeje",
            losAbrigos: "Los Abrigos",
            santaCruzDeTenerife: "Santa Cruz de Tenerife",
            buenaVistaDelNorte: "Buenavista del Norte",
            sanIsidrio: "San Isidro",

            tenerife1: {
                description: "Een leuke reis naar Tenerife met een goede vriend - feestjes, koude stranden, natuurlijke zwembaden en Siam Park."
            },
            tenerife2: {
                description: "Een terugreis naar Tenerife met twee goede vrienden - feestjes, roadtrips, Siam Park en koude stranden."
            },

            malaga: "Málaga",
            ronda: "Ronda",
            seville: "Sevilla",
            nerja: "Nerja",
            cadiz: "Cádiz",
            cordoba: "Córdoba",
            marbella: "Marbella",

            malagaTrip: {
                description: "Een verblijf van 12 weken in Zuid-Spanje met een Spaanse cursus, stedentrips, stranden en avonden uit."
            },

            valencia: "Valencia"
        },

        uk: {
            title: "Verenigd Koninkrijk",
            london: "Londen",
            londonTrip: {
                description: "Een feestelijk decemberbezoek aan Londen."
            }
        },

        hr: {
            title: "Kroatië",
            zadar: "Zadar",
            split: "Split",
            zadarTrip: {
                description: "Een voorjaarsreis naar Zadar met twee goede vrienden - veel gelach, natuur en stadsverkenning."
            }
        },

        cw: {
            title: "Curaçao",
            janThiel: "Jan Thiel",
            willemstad: "Willemstad",
            sintMichiel: "Sint Michiel",
            janKok: "Jan Kok",
            westpunt: "Westpunt",
            curacao: {
                description: "Een Caribische eilandtrip met twee vrienden - stranden, activiteiten, avonden uit en het kijken van de Nederlandse EK-wedstrijden."
            }
        },

        at: {
            title: "Oostenrijk",
            vienna: "Wenen",
            kittsee: "Kittsee",
            mariaEnzersdorf: "Maria Enzersdorf",
            hinterbruhl: "Hinterbrühl",
            leoben: "Leoben",
            sonnleiten: "Sonnleiten",
            austria: {
                description: "Een winterreis naar Oostenrijk met kerstmarkten, sightseeing in Wenen, natuur en een dagtrip naar Bratislava."
            }
        },

        cl: {
            title: "Chili",
            puertoMontt: "Puerto Montt",
            puertoVaras: "Puerto Varas",
            rioNegro: "Río Negro",
            puelo: "Puelo",
            petrohue: "Petrohué",
            puertoMonttTrip: {
                description: "Een reis door Zuid-Chili met roadtrips, vulkanen en prachtige natuur."
            }
        },

        mx: {
            title: "Mexico",
            cancun: "Cancún",
            holbox: "Holbox",
            islaMujeres: "Isla Mujeres",
            playaDelCarmen: "Playa del Carmen",
            tulum: "Tulum",
            akumal: "Akumal",
            valladolid: "Valladolid",
            puertoMorelos: "Puerto Morelos",
            cancunTrip: {
                description: "Een avontuurlijke trip door Mexico met een goede vriend - stranden, activiteiten, lekker eten en het verkennen van het beste van Cancún."
            }
        },

        pt: {
            title: "Portugal",
            lisbon: "Lissabon",
            sintra: "Sintra",
            cascais: "Cascais",
            amadora: "Amadora",
            albufeira: "Albufeira",
            portimao: "Portimão",
            colares: "Colares",
            sagres: "Sagres",
            costaDaCaparica: "Costa da Caparica",
            grandola: "Grândola",
            estombar: "Estômbar",
            lagos: "Lagos",
            lagoa: "Lagoa",
            alvor: "Alvor",
            carcavelos: "Carcavelos",
            almada: "Almada",

            lisbonTrip: {
                description: "Een Erasmus-semester in Portugal vol feestjes, Portugees leren, nieuwe vrienden en eindeloze trips."
            }
        },

        nl: {
            title: "Nederland",
            amsterdam: "Amsterdam",
            reuver: "Reuver",
            eindhoven: "Eindhoven",
            venlo: "Venlo"
        },

        be: {
            title: "België",
            liege: "Luik",
            brussels: "Brussel",
            blankeberge: "Blankenberge"
        },

        de: {
            title: "Duitsland",
            bocholt: "Bocholt",
            essen: "Essen",
            badem: "Badem",
            gondorf: "Gondorf",
            trier: "Trier",
            bitburg: "Bitburg",
            ulmen: "Ulmen",
            waxweiler: "Waxweiler",
            bedburg: "Bedburg",
            bruhl: "Brühl",
            dusseldorf: "Düsseldorf",
            frankfurtAmMain: "Frankfurt am Main",
            nuremberg: "Neurenberg",
            munich: "München",
            krefeld: "Krefeld",
            cochem: "Cochem",
            bielefeld: "Bielefeld",
            hamm: "Hamm",
            duren: "Düren",
            munster: "Münster",
            neuss: "Neuss",
            westerkappeln: "Westerkappeln",
            oberhausen: "Oberhausen",
            eschweiler: "Eschweiler",
            dortmund: "Dortmund",
            kerpen: "Kerpen",
            erftstadt: "Erftstadt",
            viersen: "Viersen",
            wurselen: "Würselen",
            alsdorf: "Alsdorf",
            herzogenrath: "Herzogenrath",
            aachen: "Aken",
            niederkruchten: "Niederkrüchten",
            monchengladbach: "Mönchengladbach",
            cologne: "Keulen",
            selfkant: "Selfkant",
            nettetal: "Nettetal"
        },

        lu: {
            title: "Luxemburg",
            luxembourg: "Luxemburg-Stad",
            vianden: "Vianden",
            echternach: "Echternach",
            berdorf: "Berdorf",
            diekirch: "Diekirch",
            waldbillig: "Waldbillig",
            consdorf: "Consdorf",
            larochette: "Larochette"
        },

        gi: {
            title: "Gibraltar",
            gibraltar: "Gibraltar"
        },

        sk: {
            title: "Slowakije",
            bratislava: "Bratislava"
        }
    }
}