"use client";

import { useEffect, useState } from "react";
import type { Translations, Locale } from "@/i18n";

export default function Navigation({
  locale,
  t,
}: {
  locale: Locale;
  t: Translations;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.reservation, href: "#reservation" },
    { label: t.nav.location, href: "#location" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a
            href="#"
            className={`font-serif text-xl font-bold tracking-wide lg:text-2xl transition-colors ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            {t.footer.brand}
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Language toggle */}
            <div
              className={`flex items-center gap-1.5 text-sm font-medium ${
                scrolled ? "text-charcoal/40" : "text-white/40"
              }`}
            >
              <a
                href="/ko/"
                className={`transition-colors ${
                  locale === "ko"
                    ? "text-gold"
                    : scrolled
                      ? "text-charcoal/60 hover:text-charcoal"
                      : "text-white/60 hover:text-white"
                }`}
              >
                KO
              </a>
              <span>|</span>
              <a
                href="/en/"
                className={`transition-colors ${
                  locale === "en"
                    ? "text-gold"
                    : scrolled
                      ? "text-charcoal/60 hover:text-charcoal"
                      : "text-white/60 hover:text-white"
                }`}
              >
                EN
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-0.5 w-6 transition-colors ${
                    scrolled || menuOpen ? "bg-charcoal" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <ul className="space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-charcoal hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2 py-2 text-sm font-medium">
              <a
                href="/ko/"
                className={
                  locale === "ko"
                    ? "text-gold"
                    : "text-charcoal/50 hover:text-charcoal"
                }
              >
                KO
              </a>
              <span className="text-charcoal/30">|</span>
              <a
                href="/en/"
                className={
                  locale === "en"
                    ? "text-gold"
                    : "text-charcoal/50 hover:text-charcoal"
                }
              >
                EN
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
