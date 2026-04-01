"use client";

import { useEffect, useState } from "react";
import type { Translations } from "@/i18n";

export default function Hero({ t }: { t: Translations }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffset(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="grain relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <img
        src="/images/exterior.jpg"
        alt={t.hero.imageAlt}
        className="absolute inset-0 h-[120%] w-full object-cover"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 text-lg text-white/80 sm:text-xl">
          {t.hero.subtitle}
        </p>
        <a
          href="#reservation"
          className="mt-10 inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-gold-light"
        >
          {t.hero.cta}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border-2 border-white/40 p-1">
          <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
