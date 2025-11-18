"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLang } from "./LanguageProvider";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between 
                    bg-white/80 dark:bg-black/50 backdrop-blur-sm 
                    border-b border-gray-200 dark:border-gray-800 relative">

      {/* Logo */}
      <Link href="/" className="text-xl font-semibold z-50">
        <Image
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="
            dark:filter-none
            filter brightness-100 saturate-0 invert
            transition-all duration-300
          "
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        <Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition">
          {t.navbar.projects}
        </Link>
        <Link href="#about" className="hover:text-gray-600 dark:hover:text-gray-300 transition">
          {t.navbar.about}
        </Link>
        <Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition">
          {t.navbar.contact}
        </Link>

        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      {/* Mobile buttons */}
      <div className="flex md:hidden items-center gap-4 z-50">
        <LanguageSwitcher />
        <ThemeToggle />

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md focus:outline-none"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="absolute top-full left-0 w-full bg-white/95 dark:bg-black/80 backdrop-blur-sm
                     border-b border-gray-200 dark:border-gray-800 md:hidden flex flex-col 
                     items-start px-6 py-4 gap-4 text-lg animate-in fade-in slide-in-from-top-2"
        >
          <Link href="#projects" onClick={() => setOpen(false)}>
            {t.navbar.projects}
          </Link>
          <Link href="#about" onClick={() => setOpen(false)}>
            {t.navbar.about}
          </Link>
          <Link href="#contact" onClick={() => setOpen(false)}>
            {t.navbar.contact}
          </Link>
        </div>
      )}
    </nav>
  );
}
