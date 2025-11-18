"use client";

import Image from "next/image";
import { useLang } from "./LanguageProvider";

export default function WorkInProgress() {
  const { t } = useLang();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6 animate-[fadeIn_0.6s_ease]">
      
      <Image
        src="/logo.png"
        alt="Dylan Logo"
        width={140}
        height={140}
        className="z-[-1] animate-bounce dark:filter-none pointer-events-none filter brightness-100 saturate-0 invert transition-all mb-4"
      />

      <h1 className="text-3xl sm:text-4xl font-semibold">
        {t.workInProgress.title}
      </h1>

      <p className="text-gray-600 dark:text-gray-300 max-w-md">
        {t.workInProgress.description}
      </p>
    </div>
  );
}
