import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./components/LanguageProvider";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dylan - Portfolio",
  description: "Travel x Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
        bg-white text-black
        dark:bg-black dark:text-white
        min-h-screen
        transition-colors duration-300
        ${geistSans.variable} ${geistMono.variable}
      `}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          <LanguageProvider>
            <Navbar/>
            <main className="w-full">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
