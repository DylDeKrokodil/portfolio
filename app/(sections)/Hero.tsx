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
                gap-20 md:gap-32
            "
        >
            <div
                className="
                    flex-1 max-w-xl 
                    p-10 
                    bg-white dark:bg-[#111] 
                    border border-black/10 dark:border-white/10
                    rounded-2xl shadow-sm
                    space-y-6
                "
            >
                <h1 className="text-6xl sm:text-7xl font-extrabold text-black dark:text-white tracking-tighter">
                    {t.hero.title}
                </h1>

                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t.hero.subtitle}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                    ✈️ {t.hero.travel}
                </p>

                <div className="flex gap-4 pt-3">
                    <ButtonPrimary href="/projects">{t.hero.projectsButton}</ButtonPrimary>

                    <ButtonSecundary href="/about">
                        {t.hero.aboutButton}
                    </ButtonSecundary>
                </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
                <div
                    className="
                        relative 
                        w-[260px] sm:w-[300px] md:w-[330px]
                        aspect-[4/5]
                        rounded-xl overflow-hidden 
                        shadow-2xl
                        bg-black/20
                        border border-white/20
                    "
                >
                    <div className="absolute inset-0 rounded-xl border border-white/40 pointer-events-none" />

                    <Image
                        src="/hero.jpeg"
                        alt="Dylan portrait"
                        fill
                        priority
                        className="
                        object-cover 
                        object-top
                        scale-100 hover:scale-105 
                        transition-transform duration-500
                        "
                    />
                </div>
            </div>
        </section>
    );
}
