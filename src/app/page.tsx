import Navbar from "./components/landingpageUI/navbar";
import HeroSection from "./components/landingpageUI/herosection";
import Features from "./components/landingpageUI/features";
import HowSection from "./components/landingpageUI/howsection";
import CallAction from "./components/landingpageUI/callaction";
import Footer from "./components/landingpageUI/footer";

export default function Home() {
  return (  
    <>
        <Navbar />
        <HeroSection />
        <Features />
        <HowSection />
        <CallAction />
        <Footer />
    </>
  );
}
