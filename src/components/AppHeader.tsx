"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/shared/i18n/LanguageContext";
import { UI_TEXT } from "@/shared/i18n/translations";

export function AppHeader() {
  const { lang, toggleLang } = useLanguage();
  const t = UI_TEXT[lang];
  const isZh = lang === "zh";

  return (
    <header className="w-full border-b border-line bg-surface/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between gap-4 px-4 md:px-6 lg:px-8 max-w-[1200px] py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-[20px] leading-[26px] font-bold text-ink no-underline hover:text-ink group"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-pause/30 shadow-xs transition-transform group-hover:scale-105">
            <Image
              src="/brand/logo.png"
              alt="Decision Court Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="tracking-tight font-serif text-ink">Decision Court</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-pause/15 text-pause font-semibold font-body tracking-wider uppercase">
            {isZh ? "小作文透视法庭" : "Statement Decoder"}
          </span>
        </Link>
        <nav aria-label="Site" className="text-small flex items-center gap-3 md:gap-6">
          <Link href="/" className="font-semibold text-ink no-underline hover:underline hidden sm:inline">
            {t.navHot}
          </Link>
          <Link href="/tools/should-i-send-this-text" className="text-muted no-underline hover:underline hidden sm:inline">
            {t.navCheck}
          </Link>
          <Link href="/safety" className="text-muted no-underline hover:underline">
            {t.navAbout}
          </Link>
          <button
            type="button"
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-md border border-line bg-surface hover:bg-canvas text-xs font-bold transition-all text-ink cursor-pointer flex items-center gap-1 shadow-2xs"
          >
            <span>🌐</span>
            <span>{isZh ? "English" : "中文"}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
