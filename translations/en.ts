export default {
    notFound: {
        title: "404 - Page not found",
        description: "It looks like you are lost. The page you are looking for does not exist. ",
        goHome: "Go back to the homepage"
    },
    navbar: {
        projects: "Projects",
        about: "About",
        contact: "Contact",
        travel: "Travel"
    },
    workInProgress: {
        title: "Work in progress",
        description: "I'm currently building my portfolio - new content, projects, and sections are being added soon. Stay tuned!",
    },
    hero: {
        title: "DYLAN",
        subtitle: "Software Developer from the Netherlands with a passion for exploring new places.",
        travel: "Visited: NL • BE • DE • LU • AT • UK • ES • PT • US • MX • CL • CW • HR • SK",
        projectsButton: "View Projects",
        aboutButton: "About Me"
    },

    about: {
        label: "About",
        title: "A bit about me.",
        paragraph1:
            "I'm Dylan, a software developer from the Netherlands. I enjoy building clean, functional digital experiences and discovering new places around the world.",
        paragraph2:
            "I'm currently studying Computer Science at Avans. I like working on projects that combine logic, design, and real-world problem solving.",
        focus: {
            label: "Focus",
            text: "Full-stack development"
        },
        approach: {
            label: "Approach",
            text: "Simple"
        },
        lifestyle: {
            label: "Lifestyle",
            text: "Traveling"
        },
        cta: "View My Work"
    },
    projects: {
        label: "Projects",
        title: "Selected Work",
        description: "A collection of projects I've worked on.",
        link: "View Project",

        list: [
            {
                title: "Poker Dice (Kotlin/Spring)",
                description: "A multi-module backend with JWT auth, Dockerized Postgres, and a clean domain structure.",
                tags: ["Kotlin", "Spring Boot", "Postgres", "Docker"],
                link: "#"
            },
            {
                title: "FlexFlow - Workforce Scheduling Platform",
                description: "A full cross-platform scheduling and workforce management system with a .NET backend, Nuxt/Vue web app, and native iOS/Android apps.",
                tags: ["C# / .NET", "Nuxt.js", "Vue", "Swift", "Kotlin"],
                link: "#"
            },
            {
                title: "HetKoppel Webpage Builder",
                description: "A custom website builder developed for HetKoppel, enabling dynamic page creation, content management, and reusable components using Laravel.",
                tags: ["Laravel", "PHP", "Blade", "MySQL", "JavaScript"],
                link: "#"
            },
            {
                title: "Household Budget Manager",
                description: "A React and Next.js application built with Firebase for managing shared household expenses, budget tracking, and real-time data syncing.",
                tags: ["React", "Next.js", "Firebase", "TypeScript"],
                link: "#"
            }
        ]
    },

    skills: {
        label: "Skills",
        title: "Skills I have worked with",
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
        ]
    },
    countries: {
        label: "Countries",
        title: "Countries I've visited",
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
        oldest: "Oldest",
        newest: "Newest"
    },
    timeline: {
        countries: "countries",
        cities: "cities",
        tripTimeline: "Trip timeline",
        destinations: "Destinations"
    },
    travel: {
        us: {
            title: "United States",
            newYork: "New York City",
            newJersey: "New Jersey",
            newYorkTrip: {
                description: "School trip to New York and a hockey game in New Jersey."
            }
        },

        es: {
            title: "Spain",

            // Tenerife trips
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
                description: "A fun Tenerife trip with a good friend - parties, cold beaches, natural pools, and Siam Park."
            },
            tenerife2: {
                description: "A return trip to Tenerife with two good friends - parties, road trips, Siam Park, and cold beaches."
            },

            // Málaga trip
            malaga: "Málaga",
            ronda: "Ronda",
            seville: "Seville",
            nerja: "Nerja",
            cadiz: "Cádiz",
            cordoba: "Córdoba",
            marbella: "Marbella",

            malagaTrip: {
                description: "A 12-week stay in southern Spain with a Spanish course, city trips, beaches, and nights out."
            },

            valencia: "Valencia",
        },

        uk: {
            title: "United Kingdom",
            london: "London",
            londonTrip: {
                description: "A festive December visit to London."
            }
        },

        hr: {
            title: "Croatia",
            zadar: "Zadar",
            split: "Split",
            zadarTrip: {
                description: "A spring trip to Zadar with two good friends - lots of laughter, nature, and city exploring."
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
                description: "A Caribbean island trip with two friends - beaches, activities, nights out, and watching the Dutch Euro Cup matches."
            }
        },

        at: {
            title: "Austria",
            vienna: "Vienna",
            kittsee: "Kittsee",
            mariaEnzersdorf: "Maria Enzersdorf",
            hinterbruhl: "Hinterbrühl",
            leoben: "Leoben",
            sonnleiten: "Sonnleiten",
            austria: {
                description: "A winter trip to Austria with Christmas markets, Vienna sightseeing, nature, and a day trip to Bratislava."
            }
        },

        cl: {
            title: "Chile",
            puertoMontt: "Puerto Montt",
            puertoVaras: "Puerto Varas",
            rioNegro: "Río Negro",
            puelo: "Puelo",
            petrohue: "Petrohué",
            puertoMonttTrip: {
                description: "A journey through southern Chile filled with road trips, volcanoes, and beautiful nature."
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
                description: "An adventure in Mexico with a good friend - beaches, activities, great food, and exploring the best of Cancún."
            }
        },

        pt: {
            title: "Portugal",
            lisbon: "Lisbon",
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
                description: "A wild Erasmus semester in Portugal filled with parties, learning Portuguese, new friends, and endless trips."
            }
        },

        nl: {
            title: "Netherlands",
            // If you want, I can generate automatic human-readable labels,
            // but for now I only include structure — let me know to expand.
            // Example:
            amsterdam: "Amsterdam",
            reuver: "Reuver",
            eindhoven: "Eindhoven",
            venlo: "Venlo",
            // …
        },

        be: {
            title: "Belgium",
            liege: "Liège",
            brussels: "Brussels",
            blankeberge: "Blankenberge",
        },

        de: {
            title: "Germany",
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
            nuremberg: "Nuremberg",
            munich: "Munich",
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
            aachen: "Aachen",
            niederkruchten: "Niederkrüchten",
            monchengladbach: "Mönchengladbach",
            cologne: "Cologne",
            selfkant: "Selfkant",
            nettetal: "Nettetal"
        },

        lu: {
            title: "Luxembourg",
            luxembourg: "Luxembourg City",
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
            title: "Slovakia",
            bratislava: "Bratislava"
        }
    }
}