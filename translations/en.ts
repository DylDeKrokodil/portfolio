export default {
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