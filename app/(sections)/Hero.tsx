"use client";

import Image from "next/image";
import { useLang } from "../components/LanguageProvider";
import { Button } from "../components/Button";
import { Section } from "../components/Section";

export default function Hero() {
    const { t } = useLang();

    return (
        <Section
            id="hero"
            innerClassName="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-14 md:gap-20"
        >
            {/* LEFT CARD */}
            <div
                className="
                    flex-1 max-w-xl
                    p-10
                    bg-white dark:bg-neutral-900
                    border border-neutral-200 dark:border-neutral-800
                    rounded-2xl
                    shadow-lg
                    space-y-6
                "
            >
                <h1 className="text-6xl sm:text-7xl font-extrabold text-black dark:text-white tracking-tight">
                    {t.hero.title}
                </h1>

                <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {t.hero.subtitle}
                </p>

                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 tracking-wide uppercase">
                    ✈️ {t.hero.travel}
                </p>

                <div className="flex gap-3 pt-4 flex-wrap">
                    <Button href="/projects" variant="primary">
                        {t.hero.projectsButton}
                    </Button>

                    <Button href="/about" variant="secondary">
                        {t.hero.aboutButton}
                    </Button>
                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center md:justify-end">
                <div
                    className="
                        relative
                        w-[260px] sm:w-[310px] md:w-[350px]
                        aspect-[4/5]
                        rounded-2xl overflow-hidden
                        shadow-lg
                        border border-neutral-200 dark:border-neutral-800
                        bg-neutral-100 dark:bg-neutral-900
                    "
                >
                    <Image
                        src="/hero.jpeg"
                        alt="Dylan portrait"
                        fill
                        priority
                        className="
                            object-cover
                            object-top
                            transition-transform duration-500
                            hover:scale-105
                        "
                    />
                </div>
            </div>
        </Section>
    );
}
