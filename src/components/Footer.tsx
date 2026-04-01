export default function Footer() {
  return (
    <footer className="bg-charcoal py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="font-serif text-xl font-bold tracking-wide text-white">
          청평하다
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/50">
          경기 가평군 청평면 북한강로 2209
        </p>
        <p className="mt-1 text-sm text-white/50">
          <a
            href="tel:010-8160-7196"
            className="transition-colors hover:text-white/70"
          >
            010-8160-7196
          </a>
        </p>
        <p className="mt-6 text-xs text-white/30">
          © 2026 청평하다. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
