import Image from "next/image";
import FadeIn from "./FadeIn";

const GALLERY_ITEMS = [
  { src: "/images/garden-sunset.jpg", alt: "석양이 물드는 정원 풍경", span: "col-span-2 row-span-2" },
  { src: "/images/garden-parasol.jpg", alt: "파라솔이 있는 잔디 마당", span: "" },
  { src: "/images/bbq-river.jpg", alt: "강변이 보이는 바베큐 공간", span: "" },
  { src: "/images/bedroom.jpg", alt: "킹사이즈 침대 두 개가 있는 깔끔한 침실", span: "" },
  { src: "/images/breakfast.jpg", alt: "아름다운 조식 세팅", span: "" },
  { src: "/images/turntable.jpg", alt: "턴테이블과 LP 레코드", span: "col-span-2" },
  { src: "/images/vhs-display.jpg", alt: "따뜻한 조명 아래 레트로 VHS 진열", span: "" },
  { src: "/images/interior-hallway.jpg", alt: "욕실과 침실이 보이는 내부 복도", span: "" },
];

export default function Gallery() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              갤러리
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              청평하다의 풍경
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl ${item.span} transition-transform hover:scale-[1.02]`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
