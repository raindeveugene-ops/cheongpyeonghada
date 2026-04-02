import { getTranslations, type Locale } from "@/i18n";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import AccommodationInfo from "@/components/AccommodationInfo";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Divider from "@/components/Divider";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "청평하다",
  description: "가평 청평 북한강변 600평 독채 펜션",
  url: "https://xn--2j1bz20c95evtb.kr",
  image: "https://xn--2j1bz20c95evtb.kr/images/exterior.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "삼회리 82-1",
    addressLocality: "청평면",
    addressRegion: "경기도 가평군",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "37.723",
    longitude: "127.457",
  },
  checkinTime: "15:00",
  checkoutTime: "11:00",
  numberOfRooms: 1,
  petsAllowed: false,
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "무료 와이파이",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "무료 주차",
      value: true,
    },
    { "@type": "LocationFeatureSpecification", name: "바비큐", value: true },
    { "@type": "LocationFeatureSpecification", name: "욕조", value: true },
  ],
};

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
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
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
      </main>
      <Footer t={t} />
      <BackToTop label={t.backToTop} />
    </>
  );
}
