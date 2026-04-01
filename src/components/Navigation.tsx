"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "소개", href: "#about" },
  { label: "시설안내", href: "#features" },
  { label: "예약안내", href: "#reservation" },
  { label: "오시는길", href: "#location" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            청평하다
          </a>

          {/* Desktop nav */}
          <ul className="hidden gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                    scrolled ? "text-charcoal" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
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
            {NAV_ITEMS.map((item) => (
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
          </ul>
        </div>
      )}
    </nav>
  );
}
