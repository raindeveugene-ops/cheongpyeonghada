import { guides } from "@/content/guides";

// 홈(한국어)에서 가이드 페이지로 가는 내부 링크
export default function GuideLinks() {
  return (
    <section aria-label="청평·가평 펜션 가이드" className="bg-cream py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold tracking-widest text-gold">
          청평·가평 펜션 가이드
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <a
                href={`/ko/guide/${g.slug}/`}
                className="block rounded-xl bg-white px-5 py-4 text-sm font-medium text-charcoal shadow-sm hover:text-gold"
              >
                {g.h1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
