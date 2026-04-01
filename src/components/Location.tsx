import FadeIn from "./FadeIn";
import type { Translations } from "@/i18n";

export default function Location({ t }: { t: Translations }) {
  return (
    <section id="location" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              {t.location.label}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              {t.location.title}
            </h2>
            <p className="mt-4 text-base text-charcoal/70">
              {t.location.address}
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl lg:col-span-2">
              <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-sage/10 to-beige">
                <div className="text-center">
                  <p className="text-4xl">📍</p>
                  <p className="mt-2 text-sm text-charcoal/50">
                    {t.location.mapPlaceholder}
                  </p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="flex flex-col justify-center rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-charcoal">
                {t.location.transportTitle}
              </h3>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-charcoal/70">
                <li>
                  <p className="font-semibold text-charcoal">
                    {t.location.car.label}
                  </p>
                  <p className="mt-1">
                    {t.location.car.line1}
                    <br />
                    {t.location.car.line2}
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-charcoal">
                    {t.location.public.label}
                  </p>
                  <p className="mt-1">
                    {t.location.public.line1}
                    <br />
                    {t.location.public.line2}
                  </p>
                </li>
              </ul>

              <a
                href="https://map.kakao.com/?q=경기 가평군 청평면 북한강로 2209"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full border border-sage px-6 py-3 text-center text-sm font-semibold text-sage transition-colors hover:bg-sage hover:text-white"
              >
                {t.location.mapLink}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
