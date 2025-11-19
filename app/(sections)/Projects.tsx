"use client";

import { useLang } from "../components/LanguageProvider";

export default function Projects() {
    const { t } = useLang();

    const projects = [
        {
            title: "Poker Dice (Kotlin/Spring)",
            description: "A multi-module backend with JWT auth, Dockerized Postgres, and a clean domain structure.",
            tags: ["Kotlin", "Spring Boot", "Postgres", "Docker"],
            link: "#"
        },
        {
            title: "FlexFlow - Workforce Scheduling Platform",
            description:
                "A full cross-platform scheduling and workforce management system with a .NET backend, Nuxt/Vue web app, and native iOS/Android apps.",
            tags: ["C# / .NET", "Nuxt.js", "Vue", "Swift", "Kotlin"],
            link: "#"
        },
        {
            title: "HetKoppel Webpage Builder",
            description:
                "A custom website builder developed for HetKoppel, enabling dynamic page creation, content management, and reusable components using Laravel.",
            tags: ["Laravel", "PHP", "Blade", "MySQL", "JavaScript"],
            link: "#"
        },
        {
            title: "Household Budget Manager",
            description:
                "A React and Next.js application built with Firebase for managing shared household expenses, budget tracking, and real-time data syncing.",
            tags: ["React", "Next.js", "Firebase", "TypeScript"],
            link: "#"
        }

    ];

    return (
        <section
            id="projects"
            className="w-full py-40 px-6 md:px-20 lg:px-32"
        >
            {/* Section heading */}
            <div className="max-w-4xl mx-auto mb-16 space-y-4">
                <span className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400 uppercase">
                    {t.projects?.label || "Projects"}
                </span>

                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Selected Work
                </h2>

                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    A few projects I've worked on - more coming soon.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="
              border border-neutral-200 dark:border-neutral-800
              rounded-xl 
              p-8 
              hover:bg-neutral-50 dark:hover:bg-neutral-900/50
              transition
              space-y-4
            "
                    >
                        {/* Title */}
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-full text-sm bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Link */}
                        <a
                            href={project.link}
                            className="text-sm font-medium text-neutral-900 dark:text-neutral-50 underline underline-offset-4 hover:opacity-80"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
