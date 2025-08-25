import { Home, Calculator, Car, Shield } from 'lucide-react';
import Link from 'next/link';

export default function WhySellSection() {
  return (
    <section className="w-full bg-green-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
        
        {/* Left Side - Background Image Only */}
        <div 
          className="relative bg-cover bg-center bg-no-repeat min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] order-2 lg:order-1"
          style={{backgroundImage: 'url(/whysellpic.png)'}}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Right Side - Title, Button, and Benefits List */}
        <div className="bg-green-700 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 min-h-[400px] lg:min-h-[600px] flex flex-col justify-center order-1 lg:order-2">
          
          {/* Title and Button */}
          <div className="mb-8 sm:mb-12">
            <h2 className="heading-primary-dark text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 sm:mb-8">
              What sets Murcot Auto apart
            </h2>
            <Link href="/get-started" className="btn-primary-light">
              GET STARTED
            </Link>
          </div>

          {/* Benefits List */}
          <div className="space-y-6 sm:space-y-8">
          
          {/* Comfort */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <Home className="w-6 sm:w-8 h-6 sm:h-8 text-white mt-1" />
            </div>
            <div>
              <h3 className="heading-secondary-dark text-lg sm:text-xl mb-2">Comfort</h3>
              <p className="text-primary-dark text-sm sm:text-base leading-relaxed">
                Sell from the comfort of your home
              </p>
            </div>
          </div>
          
          <hr className="border-white/20" />

          {/* Tax Benefits */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <Calculator className="w-6 sm:w-8 h-6 sm:h-8 text-white mt-1" />
            </div>
            <div>
              <h3 className="heading-secondary-dark text-lg sm:text-xl mb-2">Tax Benefits</h3>
              <p className="text-primary-dark text-sm sm:text-base leading-relaxed">
                Save on taxes when purchasing your next vehicle
              </p>
            </div>
          </div>
          
          <hr className="border-white/20" />

          {/* All Vehicles */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <Car className="w-6 sm:w-8 h-6 sm:h-8 text-white mt-1" />
            </div>
            <div>
              <h3 className="heading-secondary-dark text-lg sm:text-xl mb-2">All Vehicles</h3>
              <p className="text-primary-dark text-sm sm:text-base leading-relaxed">
                We buy out both financed & leased vehicles
              </p>
            </div>
          </div>
          
          <hr className="border-white/20" />

          {/* Security */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0">
              <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-white mt-1" />
            </div>
            <div>
              <h3 className="heading-secondary-dark text-lg sm:text-xl mb-2">Security</h3>
              <p className="text-primary-dark text-sm sm:text-base leading-relaxed">
                Safe & worry-free process
              </p>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
