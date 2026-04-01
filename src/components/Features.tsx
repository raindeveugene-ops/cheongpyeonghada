import FadeIn from "./FadeIn";
import type { Translations } from "@/i18n";

export default function Features({ t }: { t: Translations }) {
  return (
    <section id="features" className="bg-beige py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              {t.features.label}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              {t.features.title}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 120}>
              <div className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md h-full">
                <span className="text-4xl">{feature.emoji}</span>
                <h3 className="mt-4 text-lg font-bold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
