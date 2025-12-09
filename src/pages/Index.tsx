import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveAvailabilityBadge from "@/components/LiveAvailabilityBadge";
import HeroSection from "@/components/HeroSection";
import QuickAssessmentForm from "@/components/QuickAssessmentForm";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import TrustBadges from "@/components/TrustBadges";
import Differentials from "@/components/Differentials";
import TestimonialSection from "@/components/TestimonialSection";
import HomeFAQ from "@/components/HomeFAQ";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import PartnersCarousel from "@/components/PartnersCarousel";
import CoverageMap from "@/components/CoverageMap";
import CTASection from "@/components/CTASection";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 lg:pb-0">
      <LiveAvailabilityBadge />
      <Header />
      <main>
        <HeroSection />
        <QuickAssessmentForm />
        <StatsSection />
        <HowItWorks />
        <TrustBadges />
        <Differentials />
        <TestimonialSection />
        <HomeFAQ />
        <LeadMagnetSection />
        <PartnersCarousel />
        <CoverageMap />
        <CTASection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
