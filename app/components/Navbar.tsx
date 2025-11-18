"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLang } from "./LanguageProvider";

export default function Navbar() {
  const { t } = useLang();

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between 
                    bg-white/80 dark:bg-black/50 backdrop-blur-sm 
                    border-b border-gray-200 dark:border-gray-800">
      
      {/* Logo */}
      <Link href="/" className="text-xl font-semibold">
        <Image src="/logo.png" alt="Logo" width={60} height={60} 
           className="
    dark:filter-none
    filter brightness-100 saturate-0 invert
    transition-all duration-300
  "

        />
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-6 text-sm">
        <Link
          href="#projects"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition"
        >
          {t.navbar.projects}
        </Link>
        <Link
          href="#about"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition"
        >
          {t.navbar.about}
        </Link>
        <Link
          href="#contact"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition"
        >
          {t.navbar.contact}
        </Link>

        <LanguageSwitcher/>
        <ThemeToggle />
      </div>
    </nav>
  );
}
