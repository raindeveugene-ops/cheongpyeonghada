import FadeIn from "./FadeIn";

export default function Location() {
  return (
    <section id="location" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              오시는길
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              찾아오시는 길
            </h2>
            <p className="mt-4 text-base text-charcoal/70">
              경기 가평군 청평면 북한강로 2209
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
                    지도 영역 (카카오맵/네이버맵 임베드)
                  </p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="flex flex-col justify-center rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-charcoal">교통 안내</h3>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-charcoal/70">
                <li>
                  <p className="font-semibold text-charcoal">🚗 자가용</p>
                  <p className="mt-1">
                    서울 기준 약 50분 소요
                    <br />
                    경춘고속도로 → 청평IC → 북한강로
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-charcoal">🚆 대중교통</p>
                  <p className="mt-1">
                    경춘선 청평역 하차
                    <br />
                    택시 약 10분 소요
                  </p>
                </li>
              </ul>

              <a
                href="https://map.kakao.com/?q=경기 가평군 청평면 북한강로 2209"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full border border-sage px-6 py-3 text-center text-sm font-semibold text-sage transition-colors hover:bg-sage hover:text-white"
              >
                카카오맵에서 보기
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
