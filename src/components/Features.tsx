import FadeIn from "./FadeIn";

const FEATURES = [
  {
    emoji: "🏡",
    title: "독채 프라이버시",
    description: "단 하나의 예약, 오롯이 당신만의 공간",
  },
  {
    emoji: "🌿",
    title: "잔디 앞마당",
    description: "600평 대지 위 푸른 잔디밭에서의 여유",
  },
  {
    emoji: "🏞️",
    title: "북한강 뷰",
    description: "거실에서 바라보는 북한강의 사계",
  },
  {
    emoji: "🔥",
    title: "참나무 장작 바비큐",
    description: "사장님이 직접 구워주는 참나무 장작 바비큐",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-beige py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              시설안내
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              특별한 공간
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <FadeIn key={feature.title} className={`delay-${i * 100}`}>
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
