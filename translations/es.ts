export default {
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
            { name: "NL", flag: "🇳🇱" },
            { name: "DE", flag: "🇩🇪" },
            { name: "BE", flag: "🇧🇪" },
            { name: "LU", flag: "🇱🇺" },
            { name: "AT", flag: "🇦🇹" },
            { name: "UK", flag: "🇬🇧" },
            { name: "ES", flag: "🇪🇸" },
            { name: "PT", flag: "🇵🇹" },
            { name: "HR ", flag: "🇭🇷" },
            { name: "SK", flag: "🇸🇰" },
            { name: "US", flag: "🇺🇸" },
            { name: "MX", flag: "🇲🇽" },
            { name: "CL", flag: "🇨🇱" },
            { name: "CW", flag: "🇨🇼" },
        ]
    }
}