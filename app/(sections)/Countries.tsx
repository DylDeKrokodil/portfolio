"use client";

import HomeLabel from "../components/HomeLabel";
import HomeTitle from "../components/HomeTitle";
import { Section } from "../components/Section";
import { useLang } from "../components/LanguageProvider";
import type { Country } from "@/types/Country";

export default function Countries() {
    const { t } = useLang();
    const countries = t.countries.list as Country[];

    return (
        <Section id="countries">
            <div className="max-w-4xl mx-auto space-y-10">
                <HomeLabel>{t.countries.label}</HomeLabel>

                <HomeTitle>{t.countries.title}</HomeTitle>

                <div className="
                    grid
                    grid-cols-3 sm:grid-cols-4 md:grid-cols-5
                    gap-4
                ">
                    {countries.map((country) => (
                        <div
                            key={country.code}
                            className="
                            flex items-center gap-2
                            px-2.5 py-1
                            rounded-full text-xs font-medium
                            bg-neutral-200 dark:bg-neutral-800
                            text-neutral-800 dark:text-neutral-200
                            border border-neutral-300/40 dark:border-neutral-700/40
                            leading-none
                            h-8
                        "
                        >
                            <span className="text-base leading-none flex items-center">{country.flag}</span>
                            <span className="leading-none">{country.code}</span>
                        </div>

                    ))}
                </div>

            </div>
        </Section>
    );
}
