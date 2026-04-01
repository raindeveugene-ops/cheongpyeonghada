import Image from "next/image";
import FadeIn from "./FadeIn";

const STATS = [
  { label: "대지", value: "600평" },
  { label: "실내", value: "50평" },
  { label: "최대", value: "6인" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gold uppercase">
                소개
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-snug text-charcoal lg:text-4xl">
                자연 속, 온전한 쉼
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal/70 lg:text-lg">
                약 600평 대지 위, 북한강을 바라보는 단 하나의 독채. 넓은 잔디
                앞마당과 고요한 강변 풍경이 어우러진 청평하다에서 일상의 소음을
                내려놓으세요.
              </p>

              {/* Stats */}
              <div className="mt-10 flex gap-8">
                {STATS.map((stat) => (
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

            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/living-fireplace.jpg"
                alt="높은 천장과 장작 난로가 있는 거실 인테리어"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
