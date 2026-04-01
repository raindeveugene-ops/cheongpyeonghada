import FadeIn from "./FadeIn";
import type { Translations } from "@/i18n";

export default function Reservation({ t }: { t: Translations }) {
  return (
    <section id="reservation" className="bg-beige py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              {t.reservation.label}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              {t.reservation.title}
            </h2>
          </div>

          <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm lg:p-12">
            {/* Check-in / Check-out grid */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {t.reservation.items.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-2xl font-bold text-charcoal">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-charcoal/50">{item.label}</p>
                </div>
              ))}
            </div>

            <hr className="my-8 border-beige" />

            {/* BBQ info */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-charcoal">
                {t.reservation.bbqTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                {t.reservation.bbqDescription}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
