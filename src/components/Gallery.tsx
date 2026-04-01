"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import Lightbox from "./Lightbox";
import type { Translations } from "@/i18n";

const GALLERY_SRCS = [
  { src: "/images/garden-sunset.jpg", span: "col-span-2 row-span-2" },
  { src: "/images/garden-parasol.jpg", span: "" },
  { src: "/images/bbq-river.jpg", span: "" },
  { src: "/images/bedroom.jpg", span: "" },
  { src: "/images/breakfast.jpg", span: "" },
  { src: "/images/turntable.jpg", span: "col-span-2" },
  { src: "/images/vhs-display.jpg", span: "" },
  { src: "/images/interior-hallway.jpg", span: "" },
];

export default function Gallery({ t }: { t: Translations }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = GALLERY_SRCS.map((item, i) => ({
    src: item.src,
    alt: t.gallery.items[i]?.alt ?? "",
  }));

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + images.length) % images.length : null,
      ),
    [images.length],
  );
  const nextImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % images.length : null,
      ),
    [images.length],
  );

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              {t.gallery.label}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              {t.gallery.title}
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
            {GALLERY_SRCS.map((item, i) => (
              <div
                key={i}
                className={`group relative cursor-pointer overflow-hidden rounded-xl ${item.span}`}
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={item.src}
                  alt={images[i].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
