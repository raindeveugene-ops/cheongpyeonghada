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
            {/* Google Maps Embed */}
            <div className="overflow-hidden rounded-2xl lg:col-span-2">
              <iframe
                src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0+%EA%B0%80%ED%8F%89%EA%B5%B0+%EC%B2%AD%ED%8F%89%EB%A9%B4+%EC%82%BC%ED%9A%8C%EB%A6%AC+82-1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, aspectRatio: "16/9" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="청평하다 위치"
                className="aspect-[16/9] w-full"
              />
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
