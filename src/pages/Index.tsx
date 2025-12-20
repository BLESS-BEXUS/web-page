import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { WhatWeFlySection } from "@/components/WhatWeFlySection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FlightProfileSection } from "@/components/FlightProfileSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { TeamSection } from "@/components/TeamSection";
import { OutreachSection } from "@/components/OutreachSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { PressKitSection } from "@/components/PressKitSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <MissionSection />
        <WhatWeFlySection />
        <ArchitectureSection />
        <FlightProfileSection />
        <OutcomesSection />
        <TeamSection />
        <OutreachSection />
        <SponsorsSection />
        <FAQSection />
        <ContactSection />
        <PressKitSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
