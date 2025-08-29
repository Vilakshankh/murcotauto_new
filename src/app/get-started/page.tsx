import Navigation from '@/components/Navigation';
import VehicleIntakeSection from '@/components/VehicleIntakeSection';
import FAQSection from '@/components/FAQSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';
import ContactSection from '@/components/ContactSection';

export default function GetStarted() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <div className="pt-16 md:pt-20 lg:pt-24">
        <VehicleIntakeSection />
        <FAQSection />
        <HowItWorksSection />
        
        {/* Map Image */}
        <section className="w-full">
          <img className="w-full h-72 object-cover" src="/map.png" alt="Murcot Auto Location Map" />
        </section>
        
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}
