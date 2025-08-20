export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-24">
          <div className="w-24 h-1 bg-black mb-8"></div>
          <h2 className="text-4xl lg:text-6xl font-mono font-bold text-black leading-none tracking-tight mb-6">
            HOW IT<br />WORKS
          </h2>
          <p className="text-lg text-gray-600 font-mono leading-relaxed max-w-lg">
            Simple three-step process to sell your vehicle.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-24">
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-1">
              <div className="w-16 h-16 bg-black flex items-center justify-center">
                <span className="text-2xl font-mono font-bold text-white">01</span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-mono font-bold text-black mb-4 uppercase tracking-wide">
                Submit Details
              </h3>
              <p className="text-gray-600 font-mono leading-relaxed">
                Provide your vehicle information through our online form. Include photos and details for the most accurate valuation.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-mono text-sm uppercase tracking-wide">
                  Online Form Interface
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-1 lg:order-1">
              <div className="w-16 h-16 bg-black flex items-center justify-center">
                <span className="text-2xl font-mono font-bold text-white">02</span>
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-3">
              <h3 className="text-2xl font-mono font-bold text-black mb-4 uppercase tracking-wide">
                Get Instant Quote
              </h3>
              <p className="text-gray-600 font-mono leading-relaxed">
                Receive a competitive, no-obligation offer within one hour. Transparent pricing based on current market data.
              </p>
            </div>
            <div className="lg:col-span-6 lg:order-2">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-mono text-sm uppercase tracking-wide">
                  Market Valuation System
                </span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-1">
              <div className="w-16 h-16 bg-black flex items-center justify-center">
                <span className="text-2xl font-mono font-bold text-white">03</span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-mono font-bold text-black mb-4 uppercase tracking-wide">
                Complete Sale
              </h3>
              <p className="text-gray-600 font-mono leading-relaxed">
                Schedule pickup at your convenience. We handle all paperwork and complete the transaction on-site.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-mono text-sm uppercase tracking-wide">
                  Professional Pickup Service
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 pt-16 border-t border-gray-200">
          <button className="px-8 py-4 bg-black text-white font-mono text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">
            Start Process
          </button>
        </div>
      </div>
    </section>
  );
}
