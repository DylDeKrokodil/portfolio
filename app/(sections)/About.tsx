"use client";

import HomeLabel from "../components/HomeLabel";
import HomeTitle from "../components/HomeTitle";
import { useLang } from "../components/LanguageProvider";

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="w-full py-40 px-6 md:px-20 lg:px-40"
    >
      <div className="max-w-3xl space-y-12">

        <HomeLabel>
          {t.about.label}
        </HomeLabel>

        <HomeTitle>
          {t.about.title}
        </HomeTitle>

        <div className="space-y-6">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {t.about.paragraph1}
          </p>

          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {t.about.paragraph2}
          </p>
        </div>

        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-neutral-800 dark:text-neutral-200">
          <div>
            <p className="font-medium mb-1">{t.about.focus.label}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{t.about.focus.text}</p>
          </div>

          <div>
            <p className="font-medium mb-1">{t.about.approach.label}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{t.about.approach.text}</p>
          </div>

          <div>
            <p className="font-medium mb-1">{t.about.lifestyle.label}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{t.about.lifestyle.text}</p>
          </div>
        </div>

        <a
          href="/projects"
          className="
            inline-block mt-8 px-6 py-3 rounded-lg 
            bg-black text-white 
            dark:bg-white dark:text-black 
            font-medium 
            hover:opacity-80 transition
            whitespace-nowrap
          "
        >
          {t.about.cta}
        </a>
      </div>
    </section >
  );
}
