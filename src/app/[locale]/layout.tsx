import "../globals.css";
import type { Metadata } from "next";
import { locales, getTranslations, type Locale } from "@/i18n";
import {
  BING_SITE_VERIFICATION,
  GOOGLE_SITE_VERIFICATION,
  NAVER_SITE_VERIFICATION,
  SITE_URL as DOMAIN,
} from "@/lib/site";

// 비어 있는 확인 코드는 meta 태그를 만들지 않음
const verificationOther: Record<string, string> = {};
if (NAVER_SITE_VERIFICATION) {
  verificationOther["naver-site-verification"] = NAVER_SITE_VERIFICATION;
}
if (BING_SITE_VERIFICATION) {
  verificationOther["msvalidate.01"] = BING_SITE_VERIFICATION;
}

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
    // AI 개요·검색 결과에 긴 스니펫과 큰 이미지 미리보기를 허용
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    verification: {
      google: GOOGLE_SITE_VERIFICATION || undefined,
      other: verificationOther,
    },
    alternates: {
      canonical: url,
      languages: {
        ko: `${DOMAIN}/ko/`,
        en: `${DOMAIN}/en/`,
        "x-default": `${DOMAIN}/ko/`,
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
