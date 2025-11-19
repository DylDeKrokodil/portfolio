"use client"

import HomeLabel from "../components/HomeLabel"
import HomeTitle from "../components/HomeTitle"
import { useLang } from "../components/LanguageProvider"
import type { Country } from "@/types/Country"

export default function Countries() {
    const { t } = useLang();
    const countries = t.countries.list as Country[];

    return (
        <section
            id="countries"
            className="w-full py-32 px-6 md:px-20 lg:px-32">
            <div className="max-w-4xl mx-auto space-y-10">
                <HomeLabel>
                    {t.countries.label}
                </HomeLabel>

                <HomeTitle>
                    {t.countries.title}
                </HomeTitle>
                <div className="flex flex-wrap gap-6">
                    {countries.map((country) => (
                        <div
                            key={country.name}
                            className="
                                flex items-center gap-3
                                px-4 py-2 rounded-full text-sm
                                bg-neutral-200 dark:bg-neutral-800 
                                text-neutral-700 dark:text-neutral-300
                                border border-neutral-300/50 dark:border-neutral-700/50">
                            <span className="text-xl">{country.flag}</span>
                            <span>{country.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}