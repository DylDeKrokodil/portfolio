"use client";

import HomeLabel from "../components/HomeLabel";
import HomeTitle from "../components/HomeTitle";
import { useLang } from "../components/LanguageProvider";
import type { Project } from "@/types/Project";

export default function Projects() {
    const { t } = useLang();
    const projects = t.projects.list as Project[];

    return (
        <section
            id="projects"
            className="w-full py-40 px-6 md:px-20 lg:px-32"
        >
            <div className="max-w-4xl mx-auto mb-16 space-y-4">
                <HomeLabel>
                    {t.projects.label}
                </HomeLabel>

                <HomeTitle>
                    {t.projects.title}
                </HomeTitle>

                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    {t.projects.description}
                </p>
            </div>

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
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                            {project.title}
                        </h3>

                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {project.description}
                        </p>

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

                        <a
                            href={project.link}
                            className="text-sm font-medium text-neutral-900 dark:text-neutral-50 underline underline-offset-4 hover:opacity-80"
                        >
                            {t.projects.link}
                        </a>
                    </div>
                ))}
            </div>
        </section >
    );
}
