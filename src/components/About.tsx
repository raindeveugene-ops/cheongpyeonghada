import Image from "next/image";
import FadeIn from "./FadeIn";
import type { Translations } from "@/i18n";

export default function About({ t }: { t: Translations }) {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <FadeIn direction="left">
            <div>
              <p className="text-sm font-semibold tracking-widest text-gold uppercase">
                {t.about.label}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-snug text-charcoal lg:text-4xl">
                {t.about.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal/70 lg:text-lg">
                {t.about.description}
              </p>

              {/* Stats */}
              <div className="mt-10 flex gap-8">
                {t.about.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-sage lg:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-charcoal/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/living-fireplace.jpg"
                alt={t.about.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
