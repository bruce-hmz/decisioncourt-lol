import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { LanguageProvider } from "@/shared/i18n/LanguageContext";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Decision Court · 小作文透视法庭",
  description:
    "撕开体面伪装，透视公关算盘与潜台词。多维解构热点声明、全员信与小作文背后的真实动机与翻车风险。",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVars = [
    newsreader.variable,
    dmSans.variable,
    plexMono.variable,
  ].join(" ");
  return (
    <html lang="en" className={fontVars}>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <AppHeader />
          <main className="flex-1 w-full">{children}</main>
          <AppFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
