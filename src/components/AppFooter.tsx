"use client";

import Link from "next/link";
import { useLanguage } from "@/shared/i18n/LanguageContext";
import { UI_TEXT } from "@/shared/i18n/translations";

export function AppFooter() {
  const { lang } = useLanguage();
  const t = UI_TEXT[lang];

  return (
    <footer className="w-full mt-16 border-t border-line">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-8">
        <p className="text-small text-muted max-w-[680px]">
          {t.footerDisclaimer}
        </p>
        <nav
          aria-label="法律条款"
          className="text-small flex flex-wrap gap-x-5 gap-y-2 mt-4"
        >
          <Link href="/privacy">{t.footerPrivacy}</Link>
          <Link href="/safety">{t.footerSafety}</Link>
          <Link href="/terms">{t.footerTerms}</Link>
          <Link href="/refund">{t.footerRefund}</Link>
        </nav>
        <p className="text-micro text-subtle mt-6">
          {t.footerCopyright}
        </p>
      </div>
    </footer>
  );
}
