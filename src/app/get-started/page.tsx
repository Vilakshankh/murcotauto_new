import Navigation from '@/components/Navigation';
import VehicleIntakeSection from '@/components/VehicleIntakeSection';
import FAQSection from '@/components/FAQSection';
import VideoSection from '@/components/VideoSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FooterSection from '@/components/FooterSection';
import ContactSection from '@/components/ContactSection';

export default function GetStarted() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <div className="pt-16 md:pt-20 lg:pt-24">
        <VehicleIntakeSection />
        <div id="faq"><FAQSection /></div>
        <VideoSection />
        <div id="how-it-works"><HowItWorksSection /></div>
        
        {/* Map Image */}
        <section className="w-full">
          <img className="w-full h-72 object-cover" src="/map.png" alt="Murcot Auto Location Map" />
        </section>
        
        <div id="contact"><ContactSection /></div>
      </div>
      <FooterSection />
    </div>
  );
}
