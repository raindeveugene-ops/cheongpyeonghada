import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/content/guides";
import { INSTAGRAM_URL, SITE_URL, YEOGI_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const url = `${SITE_URL}/ko/guide/${guide.slug}/`;
  const image = `${SITE_URL}/images/${guide.image}`;

  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords.join(", "),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: guide.title,
      description: guide.description,
      siteName: "청평하다",
      locale: "ko_KR",
      images: [{ url: image, alt: guide.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [image],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = `${SITE_URL}/ko/guide/${guide.slug}/`;
  const others = guides.filter((g) => g.slug !== guide.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.h1,
        description: guide.description,
        image: `${SITE_URL}/images/${guide.image}`,
        datePublished: guide.published,
        dateModified: guide.updated,
        inLanguage: "ko-KR",
        mainEntityOfPage: url,
        author: { "@id": `${SITE_URL}/#lodging` },
        publisher: { "@id": `${SITE_URL}/#lodging` },
        about: { "@id": `${SITE_URL}/#lodging` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "청평하다", item: `${SITE_URL}/ko/` },
          { "@type": "ListItem", position: 2, name: guide.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: "ko-KR",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="border-b border-charcoal/10 bg-white">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <Link href="/ko/" className="font-serif text-xl font-bold tracking-wide text-charcoal">
            청평하다
          </Link>
          <Link href="/ko/#reservation" className="text-sm font-medium text-gold hover:text-charcoal">
            예약 문의
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-6 py-12 lg:py-16">
        <nav aria-label="breadcrumb" className="text-xs text-charcoal/50">
          <Link href="/ko/" className="hover:text-gold">청평하다</Link>
          <span className="mx-2">/</span>
          <span>{guide.h1}</span>
        </nav>

        <article className="mt-6">
          <h1 className="font-serif text-3xl font-bold leading-tight text-charcoal lg:text-4xl">
            {guide.h1}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal/80">{guide.lead}</p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/${guide.image}`}
            alt={guide.imageAlt}
            className="mt-8 aspect-[3/2] w-full rounded-2xl object-cover"
          />

          {guide.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="font-serif text-2xl font-bold text-charcoal">{section.heading}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-charcoal/80">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-charcoal/80">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-12">
            <h2 className="font-serif text-2xl font-bold text-charcoal">자주 묻는 질문</h2>
            <div className="mt-4 divide-y divide-charcoal/10 rounded-2xl bg-white px-6 shadow-sm">
              {guide.faq.map((item) => (
                <div key={item.q} className="py-5">
                  <h3 className="font-semibold text-charcoal">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-beige p-8 text-center">
            <p className="font-serif text-xl font-bold text-charcoal">청평하다 예약</p>
            <p className="mt-2 text-sm text-charcoal/70">
              홈페이지에서 인스타그램 DM으로 예약하시면 1만원 할인해 드려요.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/ko/#reservation"
                className="rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white hover:bg-gold"
              >
                예약 문의하기
              </Link>
              <a
                href={YEOGI_URL}
                className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal hover:border-gold"
                rel="noopener"
                target="_blank"
              >
                여기어때에서 예약
              </a>
              <a
                href={INSTAGRAM_URL}
                className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal hover:border-gold"
                rel="noopener"
                target="_blank"
              >
                인스타그램
              </a>
            </div>
          </section>
        </article>

        {others.length > 0 && (
          <nav className="mt-12" aria-label="다른 가이드">
            <h2 className="text-sm font-semibold tracking-widest text-gold">다른 가이드</h2>
            <ul className="mt-3 space-y-2">
              {others.map((g) => (
                <li key={g.slug}>
                  <Link href={`/ko/guide/${g.slug}/`} className="text-charcoal/80 underline-offset-4 hover:text-gold hover:underline">
                    {g.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </main>

      <footer className="bg-charcoal py-10 text-center">
        <p className="font-serif text-lg font-bold text-white">청평하다</p>
        <p className="mt-2 text-sm text-white/50">경기 가평군 청평면 북한강로 2209</p>
      </footer>
    </>
  );
}
