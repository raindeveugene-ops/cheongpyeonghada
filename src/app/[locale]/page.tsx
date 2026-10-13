import { getTranslations, type Locale, type Translations } from "@/i18n";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import AccommodationInfo from "@/components/AccommodationInfo";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Divider from "@/components/Divider";
import { INSTAGRAM_URL, SITE_URL } from "@/lib/site";

function buildJsonLd(locale: Locale, t: Translations) {
  const ko = locale === "ko";
  const pageUrl = `${SITE_URL}/${locale}/`;
  const businessId = `${SITE_URL}/#lodging`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": businessId,
        name: "청평하다",
        alternateName: ["청평하다 펜션", "Cheongpyeonghada"],
        description: t.meta.description,
        url: SITE_URL,
        image: [
          `${SITE_URL}/images/exterior.jpg`,
          `${SITE_URL}/images/living-fireplace.jpg`,
          `${SITE_URL}/images/garden-sunset.jpg`,
        ],
        sameAs: [INSTAGRAM_URL],
        address: {
          "@type": "PostalAddress",
          streetAddress: ko ? "북한강로 2209" : "2209 Bukhangang-ro",
          addressLocality: ko ? "청평면" : "Cheongpyeong-myeon",
          addressRegion: ko ? "경기도 가평군" : "Gapyeong-gun, Gyeonggi-do",
          addressCountry: "KR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 37.7122085,
          longitude: 127.4011917,
        },
        hasMap: "https://map.kakao.com/?q=경기 가평군 청평면 북한강로 2209",
        areaServed: ko ? ["청평", "가평"] : ["Cheongpyeong", "Gapyeong"],
        checkinTime: "15:00",
        checkoutTime: "11:00",
        numberOfRooms: 1,
        petsAllowed: false,
        amenityFeature: [
          "무료 와이파이",
          "무료 주차",
          "바비큐",
          "욕조",
          "객실 내 취사",
          "에어컨",
        ].map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "청평하다",
        inLanguage: ["ko-KR", "en"],
        publisher: { "@id": businessId },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage: ko ? "ko-KR" : "en",
        about: { "@id": businessId },
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const t = getTranslations(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(locale, t)).replace(/</g, "\\u003c"),
        }}
      />
      <Navigation locale={locale} t={t} />
      <main>
        <Hero t={t} />
        <Divider />
        <About t={t} />
        <Divider />
        <Features t={t} />
        <Divider />
        <AccommodationInfo t={t} />
        <Divider />
        <Gallery t={t} />
        <Divider />
        <Reservation t={t} />
        <Divider />
        <Location t={t} />
        <Divider />
        <Faq t={t} />
      </main>
      <Footer t={t} />
      <BackToTop label={t.backToTop} />
    </>
  );
}
