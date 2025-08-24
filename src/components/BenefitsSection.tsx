import { Zap, Shield, CheckCircle, Eye, DollarSign } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 mt-16 sm:mt-32">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start mb-12 sm:mb-16">
            
            {/* Left Side - Big Title */}
            <div>
              <h2 className="heading-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 sm:mb-8">
                How selling with Murcot Auto feels
              </h2>
            </div>

            {/* Right Side - Benefits List */}
            <div className="space-y-6 sm:space-y-8">
              
              {/* Efficient */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-slate-700 mt-1" />
                </div>
                <div>
                  <h3 className="heading-secondary text-lg sm:text-xl mb-2">Efficient</h3>
                  <p className="text-primary text-sm sm:text-base leading-relaxed">
                    Quick and streamlined car selling process. Get your car valued and sold within days, not weeks.
                  </p>
                </div>
              </div>
              
              <hr className="border-slate-200" />

              {/* Secure */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-slate-700 mt-1" />
                </div>
                <div>
                  <h3 className="heading-secondary text-lg sm:text-xl mb-2">Secure</h3>
                  <p className="text-primary text-sm sm:text-base leading-relaxed">
                    Safe and trusted transactions with verified buyers. All documentation handled professionally and securely.
                  </p>
                </div>
              </div>
              
              <hr className="border-slate-200" />

              {/* Hassle-free */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-slate-700 mt-1" />
                </div>
                <div>
                  <h3 className="heading-secondary text-lg sm:text-xl mb-2">Hassle-free</h3>
                  <p className="text-primary text-sm sm:text-base leading-relaxed">
                    No paperwork worries or complex procedures. We handle everything from valuation to final transfer.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Reviews Section */}
          <div className="text-left mt-16 sm:mt-24">
            <h2 className="text-base sm:text-lg font-light text-slate-900 tracking-tight leading-none mb-8 sm:mb-12">
              What people are saying
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Review Card 1 */}
            <div className="p-4 sm:p-6 lg:p-8 text-left border border-black">
              <div className="flex items-center justify-start gap-2 mb-3 sm:mb-4">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-stone-400" /> 
                <h3 className="text-base sm:text-lg font-light text-black tracking-wide">Fast</h3>
              </div>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-4 sm:mb-6">
                "Amazing service and incredibly fast process. Sold my car in just 2 days with no hassle."
              </p>
              <p className="text-xs sm:text-sm text-slate-400 tracking-wide">Sarah Johnson</p>
            </div>

            {/* Review Card 2 */}
            <div className="p-4 sm:p-6 lg:p-8 text-left border border-black">
              <div className="flex items-center justify-start gap-2 mb-3 sm:mb-4">
                <Eye className="w-4 sm:w-5 h-4 sm:h-5 text-stone-400" />
                <h3 className="text-base sm:text-lg font-light text-black tracking-wide">Transparent</h3>
              </div>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-4 sm:mb-6">
                "Professional team and transparent pricing. They handled all the paperwork perfectly."
              </p>
              <p className="text-xs sm:text-sm text-slate-400 tracking-wide">Michael Chen</p>
            </div>

            {/* Review Card 3 */}
            <div className="p-4 sm:p-6 lg:p-8 text-left border border-black">
              <div className="flex items-center justify-start gap-2 mb-3 sm:mb-4">
                <DollarSign className="w-4 sm:w-5 h-4 sm:h-5 text-stone-400" />
                <h3 className="text-base sm:text-lg font-light text-black tracking-wide">Good price</h3>
              </div>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-4 sm:mb-6">
                "Got the best price for my car. The online valuation was accurate and pickup was convenient."
              </p>
              <p className="text-xs sm:text-sm text-slate-400 tracking-wide">Emma Davis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
