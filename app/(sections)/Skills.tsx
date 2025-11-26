"use client"

import { useLang } from "../components/LanguageProvider";
import HomeLabel from "../components/HomeLabel";
import HomeTitle from "../components/HomeTitle";
import { Section } from "../components/Section";
import type { Skills } from "@/types/Skills";

export default function Skills() {
    const { t } = useLang();
    const skills = t.skills.list as Skills[];

    return (
        <Section id="skills">
            <div className="max-w-4xl mx-auto space-y-10">
                <HomeLabel>
                    {t.skills.label}
                </HomeLabel>
                <HomeTitle>
                    {t.skills.title}
                </HomeTitle>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <span
                            key={skill.name}
                            className="
                                px-4 py-2 rounded-full text-sm
                                bg-neutral-200 dark:bg-neutral-800
                                text-neutral-700 dark:text-neutral-300
                                border border-neutral-300/50 dark:border-neutral-700/50">
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>
        </Section>
    )
}

