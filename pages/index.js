import AboutSection from "@/components/Home/AboutSection";
import FeatureSection from "@/components/Home/FeatureSection";
import HeroSection from "@/components/Home/HeroSection";
import TargetSection from "@/components/Home/TargetSection";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* <AboutSection />
        <TargetSection />
        <FeatureSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
