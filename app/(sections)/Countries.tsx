"use client";

import HomeLabel from "../components/HomeLabel";
import HomeTitle from "../components/HomeTitle";
import { useLang } from "../components/LanguageProvider";
import type { Country } from "@/types/Country";

export default function Countries() {
    const { t } = useLang();
    const countries = t.countries.list as Country[];

    return (
        <section
            id="countries"
            className="w-full py-40 px-6 md:px-20 lg:px-32"
        >
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
        </section>
    );
}