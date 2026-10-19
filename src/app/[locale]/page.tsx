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
import GuideLinks from "@/components/GuideLinks";
import {
  INSTAGRAM_DM_URL,
  INSTAGRAM_URL,
  SITE_IMAGES,
  SITE_URL,
  YEOGI_URL,
} from "@/lib/site";

const ADDRESS_KO = "경기 가평군 청평면 북한강로 2209";

function buildJsonLd(locale: Locale, t: Translations) {
  const ko = locale === "ko";
  const pageUrl = `${SITE_URL}/${locale}/`;
  const businessId = `${SITE_URL}/#lodging`;

  const pageId = `${pageUrl}#webpage`;
  const houseId = `${SITE_URL}/#house`;
  const inLanguage = ko ? "ko-KR" : "en";
  // "📶 무선인터넷" → "무선인터넷"
  const amenities = t.accommodation.amenities.items.map((item) =>
    item.replace(/^\S+\s+/, ""),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": businessId,
        name: "청평하다",
        alternateName: ["청평하다 펜션", "청평하다 독채", "Cheongpyeonghada"],
        description: t.meta.description,
        slogan: t.hero.subtitle,
        url: SITE_URL,
        logo: `${SITE_URL}/images/exterior.jpg`,
        image: SITE_IMAGES,
        sameAs: [INSTAGRAM_URL, YEOGI_URL],
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
        hasMap: [
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_KO)}`,
          `https://map.kakao.com/?q=${encodeURIComponent(ADDRESS_KO)}`,
        ],
        areaServed: ko ? ["청평", "가평"] : ["Cheongpyeong", "Gapyeong"],
        knowsLanguage: ["ko"],
        checkinTime: "15:00",
        checkoutTime: "11:00",
        numberOfRooms: 1,
        petsAllowed: false,
        smokingAllowed: false,
        amenityFeature: [...amenities, ko ? "바비큐" : "BBQ"].map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
        containsPlace: { "@id": houseId },
        makesOffer: {
          "@type": "Offer",
          name: ko ? "참나무 장작 바비큐" : "Oak-wood BBQ",
          description: t.reservation.bbqDescription,
          price: 50000,
          priceCurrency: "KRW",
        },
        potentialAction: [
          {
            "@type": "ReserveAction",
            name: ko ? "인스타그램 DM 예약 문의" : "Book via Instagram DM",
            target: INSTAGRAM_DM_URL,
          },
          {
            "@type": "ReserveAction",
            name: ko ? "여기어때에서 예약" : "Book on Yeogi",
            target: YEOGI_URL,
          },
        ],
      },
      {
        "@type": "House",
        "@id": houseId,
        name: ko ? "청평하다 복층 독채" : "Cheongpyeonghada private duplex house",
        description: t.about.description,
        containedInPlace: { "@id": businessId },
        floorSize: {
          "@type": "QuantitativeValue",
          value: 165,
          unitCode: "MTK",
        },
        numberOfRooms: 1,
        numberOfBedrooms: 1,
        occupancy: {
          "@type": "QuantitativeValue",
          minValue: 1,
          maxValue: 6,
        },
        bed: {
          "@type": "BedDetails",
          numberOfBeds: 2,
          typeOfBed: ko ? "킹베드" : "King bed",
        },
        petsAllowed: false,
        smokingAllowed: false,
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
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": businessId },
        mainEntity: { "@id": businessId },
        primaryImageOfPage: `${SITE_URL}/images/exterior.jpg`,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage,
        isPartOf: { "@id": pageId },
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
        {locale === "ko" && <GuideLinks />}
      </main>
      <Footer t={t} />
      <BackToTop label={t.backToTop} />
    </>
  );
}
