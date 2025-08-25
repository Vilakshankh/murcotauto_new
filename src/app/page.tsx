import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ReviewsSection from '@/components/ReviewsSection';
import WhySellSection from '@/components/WhySellSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <div id="benefits"><BenefitsSection /></div>
      <WhySellSection />
      <HowItWorksSection />
      <ReviewsSection />
      <div id="about-us"><AboutSection /></div>
      <div id="contact-us"><ContactSection /></div>
      <FooterSection />
    </div>
  );
}
