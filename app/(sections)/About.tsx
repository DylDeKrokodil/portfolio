"use client";

import { ButtonPrimary } from "../components/ButtonPrimary";
import HomeLabel from "../components/HomeLabel";
import HomeTitle from "../components/HomeTitle";
import { useLang } from "../components/LanguageProvider";

export default function About() {
  const { t } = useLang();

  return (
    <section
      id="about"
      className="
        w-full 
        py-10 
        px-6 md:px-20 lg:px-40
      "
    >
      <div className="max-w-3xl space-y-14">

        <HomeLabel>{t.about.label}</HomeLabel>

        <HomeTitle>{t.about.title}</HomeTitle>

        <div className="space-y-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
        </div>

        <div className="
          grid grid-cols-1 sm:grid-cols-3 
          gap-8 
          pt-10
        ">
          <div className="space-y-1">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50">
              {t.about.focus.label}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {t.about.focus.text}
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50">
              {t.about.approach.label}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {t.about.approach.text}
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-semibold text-neutral-900 dark:text-neutral-50">
              {t.about.lifestyle.label}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {t.about.lifestyle.text}
            </p>
          </div>
        </div>

        <ButtonPrimary href="/projects">
          {t.about.cta}
        </ButtonPrimary>
      </div>
    </section>
  );
}
