"use client";

import { useLang } from "./components/LanguageProvider";
import Link from "next/link";

export default function NotFound() {
    const { t } = useLang();

    return (
        <section className="w-full min-h-[70vh] flex flex-col items-center justify-center
                        px-6 md:px-20 text-center space-y-6">

            <h1 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-50">
                {t.notFound.title}
            </h1>

            <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
                {t.notFound.description}
            </p>

            <Link
                href="/"
                className="
                    px-6 py-3 rounded-lg 
                    bg-black text-white 
                    dark:bg-white dark:text-black 
                    hover:opacity-80 transition
                    "
            >
                {t.notFound.goHome}
            </Link>
        </section>
    );
}