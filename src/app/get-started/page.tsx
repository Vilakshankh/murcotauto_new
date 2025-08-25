import Navigation from '@/components/Navigation';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';

export default function GetStarted() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <div className="pt-16 md:pt-20 lg:pt-24">
        <HowItWorksSection />
        <BenefitsSection />
        <AboutSection />
        <FooterSection />
      </div>
    </div>
  );
}
