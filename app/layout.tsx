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

export const metadata = {
  title: "Dylan de Groot - Software Developer & Traveler",
  description: "Official portfolio of Dylan de Groot showcasing software projects and world travels.",
  keywords: ["Dylan de Groot", "Software Developer", "Portfolio", "Travel"],
  metadataBase: new URL("https://dylandegroot.nl"),
  openGraph: {
    title: "Dylan de Groot – Software Developer",
    description: "Official portfolio of Dylan de Groot.",
    url: "/",
    siteName: "Dylan de Groot Portfolio",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylan de Groot - Software Developer",
    description: "Explore my projects and travels.",
    images: ["/og-preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
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
            <Navbar />
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
