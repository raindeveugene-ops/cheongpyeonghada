import "../globals.css";
import type { Metadata } from "next";
import { locales, getTranslations, type Locale } from "@/i18n";

const DOMAIN = "https://xn--2j1bz20c95evtb.kr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const url = `${DOMAIN}/${locale}/`;
  const alternateLocale = locale === "ko" ? "en" : "ko";

  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: url,
      languages: {
        ko: `${DOMAIN}/ko/`,
        en: `${DOMAIN}/en/`,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: t.meta.title,
      description: t.meta.description,
      siteName: "청평하다",
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: alternateLocale === "ko" ? "ko_KR" : "en_US",
      images: [
        {
          url: `${DOMAIN}/images/exterior.jpg`,
          width: 1200,
          height: 630,
          alt: t.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [`${DOMAIN}/images/exterior.jpg`],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
