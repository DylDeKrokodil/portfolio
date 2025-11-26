export default {
    notFound: {
        title: "404 - Página no encontrada",
        description: "Parece que estás perdido. La página que buscas no existe.",
        goHome: "Volver a la página principal"
    },
    navbar: {
        projects: "Proyectos",
        about: "Sobre mí",
        contact: "Contacto",
        travel: "Viajes"
    },
    workInProgress: {
        title: "Trabajo en progreso",
        description: "Actualmente estoy construyendo mi portafolio: pronto se agregarán nuevos contenidos, proyectos y secciones. ¡Mantente al tanto!",
    },
    hero: {
        title: "DYLAN",
        subtitle: "Software Developer de los Paises Bajos con una pasión por explorar nuevos lugares.",
        travel: "VISITADO: NL • BE • DE • LU • AT • UK • ES • PT • US • MX • CL • CW • HR • SK",
        projectsButton: "Ver Proyectos",
        aboutButton: "Sobre Mí"
    },
    about: {
        label: "Sobre",
        title: "Un poco sobre mí.",
        paragraph1:
            "Soy Dylan, un desarrollador de software de los Países Bajos. Disfruto construyendo experiencias digitales limpias y funcionales y descubriendo nuevos lugares alrededor del mundo.",
        paragraph2:
            "Actualmente estudio Ciencias de la Computación en Avans. Me gusta trabajar en proyectos que combinan lógica, diseño y resolución de problemas del mundo real.",
        focus: {
            label: "Focus",
            text: "Full-stack development"
        },
        approach: {
            label: "Enfoque",
            text: "Simple"
        },
        lifestyle: {
            label: "Lifestyle",
            text: "Viajando"
        },
        cta: "Ver Mi Trabajo"
    },
    projects: {
        label: "Proyectos",
        title: "Trabajo Seleccionado",
        description: "Algunos proyectos en los que he trabajado",
        link: "Ver Proyecto →",

        list: [
            {
                title: "Poker Dice (Kotlin/Spring)",
                description: "Un backend multi-módulo con autenticación JWT, Postgres dockerizado y una estructura de dominio clean.",
                tags: ["Kotlin", "Spring Boot", "Postgres", "Docker"],
                link: "#"
            },
            {
                title: "FlexFlow - Workforce Scheduling Platform",
                description: "Un sistema completo de programación y gestión de personal multiplataforma con un backend .NET, una aplicación web Nuxt/Vue y aplicaciones nativas para iOS/Android.",
                tags: ["C# / .NET", "Nuxt.js", "Vue", "Swift", "Kotlin"],
                link: "#"
            },
            {
                title: "HetKoppel Webpage Builder",
                description: "Un constructor de páginas web personalizado desarrollado para HetKoppel, que permite la creación dinámica de páginas, la gestión de contenido y el uso de componentes reutilizables con Laravel.",
                tags: ["Laravel", "PHP", "Blade", "MySQL", "JavaScript"],
                link: "#"
            },
            {
                title: "Household Budget Manager",
                description: "Una aplicación de React y Next.js construida con Firebase para gestionar gastos compartidos del hogar, seguimiento del presupuesto y sincronización de datos en tiempo real.",
                tags: ["React", "Next.js", "Firebase", "TypeScript"],
                link: "#"
            }
        ]
    },
    skills: {
        label: "Skills",
        title: "Skills con los que he trabajado",
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
        label: "Países",
        title: "Países que he visitado",
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
        oldest: "Más antiguo",
        newest: "Más reciente"
    },
    timeline: {
        countries: "países",
        cities: "ciudades",
        tripTimeline: "Línea de viajes",
        destinations: "Destinos"
    },
    travel: {
        us: {
            title: "Estados Unidos",
            newYork: "Nueva York",
            newJersey: "Nueva Jersey",
            newYorkTrip: {
                description: "Un viaje escolar a Nueva York con un partido de hockey en Nueva Jersey."
            }
        },

        es: {
            title: "España",

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
                description: "Un viaje divertido a Tenerife con un buen amigo - fiestas, playas frías, piscinas naturales y Siam Park."
            },
            tenerife2: {
                description: "Un viaje de regreso a Tenerife con dos buenos amigos - fiestas, road trips, Siam Park y playas frías."
            },

            malaga: "Málaga",
            ronda: "Ronda",
            seville: "Sevilla",
            nerja: "Nerja",
            cadiz: "Cádiz",
            cordoba: "Córdoba",
            marbella: "Marbella",

            malagaTrip: {
                description: "Una estancia de 12 semanas en el sur de España con un curso de español, excursiones urbanas, playas y noches de fiesta."
            },

            valencia: "Valencia"
        },

        uk: {
            title: "Reino Unido",
            london: "Londres",
            londonTrip: {
                description: "Una visita festiva a Londres en diciembre."
            }
        },

        hr: {
            title: "Croacia",
            zadar: "Zadar",
            split: "Split",
            zadarTrip: {
                description: "Un viaje de primavera a Zadar con dos buenos amigos - mucha risa, naturaleza y exploración urbana."
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
                description: "Un viaje isleño por el Caribe con dos amigos - playas, actividades, noches de fiesta y viendo los partidos de la Eurocopa de los Países Bajos."
            }
        },

        at: {
            title: "Austria",
            vienna: "Viena",
            kittsee: "Kittsee",
            mariaEnzersdorf: "Maria Enzersdorf",
            hinterbruhl: "Hinterbrühl",
            leoben: "Leoben",
            sonnleiten: "Sonnleiten",
            austria: {
                description: "Un viaje invernal a Austria con mercados navideños, turismo por Viena, naturaleza y una excursión de un día a Bratislava."
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
                description: "Un viaje por el sur de Chile con road trips, volcanes y una naturaleza impresionante."
            }
        },

        mx: {
            title: "México",
            cancun: "Cancún",
            holbox: "Holbox",
            islaMujeres: "Isla Mujeres",
            playaDelCarmen: "Playa del Carmen",
            tulum: "Tulum",
            akumal: "Akumal",
            valladolid: "Valladolid",
            puertoMorelos: "Puerto Morelos",
            cancunTrip: {
                description: "Una aventura por México con un buen amigo - playas, actividades, buena comida y explorando lo mejor de Cancún."
            }
        },

        pt: {
            title: "Portugal",
            lisbon: "Lisboa",
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
                description: "Un Erasmus súper divertido en Portugal lleno de fiestas, aprender portugués, nuevos amigos y viajes sin parar.    "
            }
        },

        nl: {
            title: "Países Bajos",
            amsterdam: "Ámsterdam",
            reuver: "Reuver",
            eindhoven: "Eindhoven",
            venlo: "Venlo"
        },

        be: {
            title: "Bélgica",
            liege: "Lieja",
            brussels: "Bruselas",
            blankeberge: "Blankenberge"
        },

        de: {
            title: "Alemania",
            bocholt: "Bocholt",
            essen: "Essen",
            badem: "Badem",
            gondorf: "Gondorf",
            trier: "Tréveris",
            bitburg: "Bitburgo",
            ulmen: "Ulmen",
            waxweiler: "Waxweiler",
            bedburg: "Bedburg",
            bruhl: "Brühl",
            dusseldorf: "Düsseldorf",
            frankfurtAmMain: "Fráncfort del Meno",
            nuremberg: "Núremberg",
            munich: "Múnich",
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
            aachen: "Aquisgrán",
            niederkruchten: "Niederkrüchten",
            monchengladbach: "Mönchengladbach",
            cologne: "Colonia",
            selfkant: "Selfkant",
            nettetal: "Nettetal"
        },

        lu: {
            title: "Luxemburgo",
            luxembourg: "Ciudad de Luxemburgo",
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
            title: "Eslovaquia",
            bratislava: "Bratislava"
        }
    }
}