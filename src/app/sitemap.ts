import type { MetadataRoute } from "next";
import { locales } from "@/i18n";
import { SITE_IMAGES, SITE_URL } from "@/lib/site";
import { guides } from "@/content/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // 빌드(배포) 시점을 lastmod로 사용해 검색엔진이 변경을 알아채도록 함
  const lastModified = new Date();
  const languages = {
    ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}/`])),
    "x-default": `${SITE_URL}/ko/`,
  };

  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}/`,
    lastModified,
    changeFrequency: "weekly",
    priority: locale === "ko" ? 1 : 0.9,
    alternates: { languages },
    images: SITE_IMAGES,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${SITE_URL}/ko/guide/${g.slug}/`,
    lastModified: new Date(g.updated),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [`${SITE_URL}/images/${g.image}`],
  }));

  return [...home, ...guidePages];
}
