import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ReviewsSection from '@/components/ReviewsSection';
import WhySellSection from '@/components/WhySellSection';
import VideoSection from '@/components/VideoSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <div className="pt-16 md:pt-20 lg:pt-24">
        <HeroSection />
        <ReviewsSection />
        
        <WhySellSection />
        <div id="benefits"><BenefitsSection /></div>
        <VideoSection />
        <HowItWorksSection />
        
        <div id="about-us"><AboutSection /></div>
        <div id="contact-us"><ContactSection /></div>
      </div>
      <FooterSection />
    </div>
  );
}
