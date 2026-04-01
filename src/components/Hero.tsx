export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      {/* Placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-dark via-charcoal to-charcoal" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          북한강이 흐르는 600평의 고요
        </h1>
        <p className="mt-6 text-lg text-white/80 sm:text-xl">
          가평 청평, 단 하나의 독채 스테이
        </p>
        <a
          href="#reservation"
          className="mt-10 inline-block rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-gold-light"
        >
          예약 문의하기
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border-2 border-white/40 p-1">
          <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
