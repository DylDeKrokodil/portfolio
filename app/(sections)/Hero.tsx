"use client";

import Image from "next/image";
import { useLang } from "../components/LanguageProvider";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { ButtonSecundary } from "../components/ButtonSecundary";

export default function Hero() {
    const { t } = useLang();

    return (
        <section
            id="hero"
            className="
                w-full 
                min-h-[85vh]
                flex flex-col md:flex-row
                items-center justify-center
                px-6 md:px-20 lg:px-32
                pt-20 md:pt-10
                gap-14 md:gap-24
            "
        >
            {/* LEFT CARD */}
            <div
                className="
                    flex-1 max-w-xl 
                    p-10 
                    backdrop-blur-xl
                    bg-white/70 dark:bg-[#111]/60
                    border border-black/10 dark:border-white/10
                    rounded-2xl 
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
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

                <div className="flex gap-4 pt-4">
                    <ButtonPrimary href="/projects">
                        {t.hero.projectsButton}
                    </ButtonPrimary>

                    <ButtonSecundary href="/about">
                        {t.hero.aboutButton}
                    </ButtonSecundary>
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
                        shadow-xl
                        border border-white/10 dark:border-white/10
                        bg-neutral-900/10 dark:bg-neutral-700/10
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
        </section>
    );
}