"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import type { Translations } from "@/i18n";

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl bg-white shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-beige/30"
      >
        <span className="text-lg font-bold text-charcoal">{title}</span>
        <span
          className={`text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function AccommodationInfo({ t }: { t: Translations }) {
  const info = t.accommodation;

  return (
    <section id="accommodation" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              {info.label}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              {info.title}
            </h2>
          </div>
        </FadeIn>

        {/* About quote */}
        <FadeIn delay={100}>
          <blockquote className="mt-12 rounded-2xl bg-beige/50 px-8 py-6 text-center text-charcoal/80 leading-relaxed border-l-4 border-gold/40 italic">
            {info.about}
          </blockquote>
        </FadeIn>

        {/* Room Layout */}
        <FadeIn delay={150}>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-charcoal mb-6">
              {info.roomLayout.title}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {info.roomLayout.items.map((room) => (
                <div
                  key={room.label}
                  className="rounded-2xl bg-beige/30 p-5 border border-gold/10"
                >
                  <span className="text-2xl">{room.emoji}</span>
                  <h4 className="mt-2 font-bold text-charcoal">
                    {room.label}
                  </h4>
                  <p className="mt-1 text-sm text-charcoal/60 leading-relaxed">
                    {room.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Amenities */}
        <FadeIn delay={200}>
          <div className="mt-12">
            <h3 className="text-xl font-bold text-charcoal mb-6">
              {info.amenities.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {info.amenities.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-beige px-4 py-2 text-sm text-charcoal/80 border border-gold/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* BBQ */}
        <FadeIn delay={250}>
          <div className="mt-12 rounded-2xl bg-beige/50 p-6 border border-gold/20">
            <h3 className="text-xl font-bold text-charcoal">
              🔥 {info.bbq.title}
            </h3>
            <p className="mt-2 text-charcoal/80 font-semibold">
              {info.bbq.price}
            </p>
            <p className="mt-1 text-sm text-charcoal/60">{info.bbq.note}</p>
          </div>
        </FadeIn>

        {/* Collapsible sections */}
        <div className="mt-12 space-y-4">
          <FadeIn delay={300}>
            <Accordion title={info.rules.title}>
              <ul className="space-y-2">
                {info.rules.items.map((rule) => (
                  <li
                    key={rule}
                    className="flex gap-2 text-sm text-charcoal/70 leading-relaxed"
                  >
                    <span className="text-gold shrink-0">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </Accordion>
          </FadeIn>

          <FadeIn delay={350}>
            <Accordion title={info.cancellation.title}>
              <ul className="space-y-2">
                {info.cancellation.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-charcoal/70 leading-relaxed"
                  >
                    <span className="text-gold shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Accordion>
          </FadeIn>

          <FadeIn delay={400}>
            <Accordion title={info.notes.title}>
              <ul className="space-y-2">
                {info.notes.items.map((note) => (
                  <li
                    key={note}
                    className="flex gap-2 text-sm text-charcoal/70 leading-relaxed"
                  >
                    <span className="text-gold shrink-0">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
