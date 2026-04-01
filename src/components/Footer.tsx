import type { Translations } from "@/i18n";

export default function Footer({ t }: { t: Translations }) {
  return (
    <footer className="bg-charcoal py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="font-serif text-xl font-bold tracking-wide text-white">
          {t.footer.brand}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/50">
          {t.footer.address}
        </p>

        <p className="mt-6 text-xs text-white/30">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
