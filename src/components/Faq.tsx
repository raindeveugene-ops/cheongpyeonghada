import FadeIn from "./FadeIn";
import type { Translations } from "@/i18n";

export default function Faq({ t }: { t: Translations }) {
  return (
    <section id="faq" className="bg-beige py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              {t.faq.label}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              {t.faq.title}
            </h2>
          </div>

          <div className="mt-12 divide-y divide-charcoal/10 rounded-2xl bg-white px-6 shadow-sm lg:px-8">
            {t.faq.items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-charcoal">
                  <h3 className="text-base">{item.q}</h3>
                  <span className="text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
