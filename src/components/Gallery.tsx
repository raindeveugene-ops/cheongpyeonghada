import FadeIn from "./FadeIn";

const GALLERY_ITEMS = [
  { gradient: "from-sage/40 to-sage-dark/30", span: "col-span-2 row-span-2" },
  { gradient: "from-beige to-gold/20", span: "" },
  { gradient: "from-gold/30 to-beige", span: "" },
  { gradient: "from-sage-dark/20 to-charcoal/10", span: "" },
  { gradient: "from-charcoal/10 to-sage/20", span: "" },
  { gradient: "from-gold/20 to-sage/30", span: "col-span-2" },
  { gradient: "from-beige to-sage/20", span: "" },
  { gradient: "from-sage/30 to-gold/20", span: "" },
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
                className={`overflow-hidden rounded-xl bg-gradient-to-br ${item.gradient} ${item.span} transition-transform hover:scale-[1.02]`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
