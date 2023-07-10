import AboutSection from "@/components/Home/AboutSection";
import FeatureSection from "@/components/Home/FeatureSection";
import HeroSection from "@/components/Home/HeroSection";
import TargetSection from "@/components/Home/TargetSection";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>90 روز</title>
        <meta name="description" content={"90 روز"} />
        <meta name="author" content="s.Erfan Hoseini github:s-erfan" />
        <link rel="icon" href="/logo.png"></link>
      </Head>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TargetSection />
        <FeatureSection />
      </main>
      <Footer />
    </>
  );
}
