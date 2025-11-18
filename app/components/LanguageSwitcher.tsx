"use client";

import { useState, useRef, useEffect } from "react";
import { useLang } from "./LanguageProvider";
import { flags } from "@/translations/languages";
import type { Locale } from "@/translations/languages";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const switcherRef = useRef<HTMLDivElement>(null);
  const langs: Locale[] = ["en", "nl", "es"];

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const changeLang = (l: Locale) => {
    setLang(l);
    setOpen(false);
  };

  return (
    <div ref={switcherRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md 
                   border border-gray-300 dark:border-gray-700 
                   hover:bg-gray-100 dark:hover:bg-gray-800 
                   transition cursor-pointer select-none"
      >
        <span className="text-lg">{flags[lang]}</span>
        <span className="text-sm font-medium uppercase">{lang}</span>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-32 rounded-md shadow-lg z-50
                     bg-white dark:bg-black border border-gray-200 dark:border-gray-700 
                     animate-[fadeIn_0.12s_ease-out]"
        >
          <ul className="py-1">
            {langs.map((l) => (
              <li key={l}>
                <button
                  onClick={() => changeLang(l)}
                  className="flex items-center gap-2 w-full px-3 py-2 
                             text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800 
                             transition z-50"
                >
                  <span className="text-lg">{flags[l]}</span>
                  <span className="uppercase">{l}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
