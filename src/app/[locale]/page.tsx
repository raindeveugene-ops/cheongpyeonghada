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
