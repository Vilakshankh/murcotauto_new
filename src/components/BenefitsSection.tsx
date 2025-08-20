export default function BenefitsSection() {
  return (
    <section className="w-full bg-gray-50 py-32">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-24">
          <div className="w-24 h-1 bg-black mb-8"></div>
          <h2 className="text-4xl lg:text-6xl font-mono font-bold text-black leading-none tracking-tight mb-6">
            WHY CHOOSE<br />MURCOT
          </h2>
          <p className="text-lg text-gray-600 font-mono leading-relaxed max-w-lg">
            Three decades of expertise in the automotive industry.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Benefit 1 */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-black flex items-center justify-center">
              <span className="text-2xl font-mono font-bold text-white">01</span>
            </div>
            <div>
              <h3 className="text-xl font-mono font-bold text-black mb-4 uppercase tracking-wide">
                Fast Process
              </h3>
              <p className="text-gray-600 font-mono leading-relaxed">
                Get your car evaluated and sold within 24 hours. No lengthy procedures or unnecessary delays.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-black flex items-center justify-center">
              <span className="text-2xl font-mono font-bold text-white">02</span>
            </div>
            <div>
              <h3 className="text-xl font-mono font-bold text-black mb-4 uppercase tracking-wide">
                Fair Pricing
              </h3>
              <p className="text-gray-600 font-mono leading-relaxed">
                Transparent market-based valuations. No hidden fees or surprise deductions from your quote.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-black flex items-center justify-center">
              <span className="text-2xl font-mono font-bold text-white">03</span>
            </div>
            <div>
              <h3 className="text-xl font-mono font-bold text-black mb-4 uppercase tracking-wide">
                Zero Hassle
              </h3>
              <p className="text-gray-600 font-mono leading-relaxed">
                We handle all paperwork, pickup, and transfer processes. You just need to sign and get paid.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 pt-16 border-t border-gray-300">
          <div>
            <div className="text-3xl font-mono font-bold text-black">1993</div>
            <div className="text-sm font-mono text-gray-600 uppercase tracking-wide">Founded</div>
          </div>
          <div>
            <div className="text-3xl font-mono font-bold text-black">200K+</div>
            <div className="text-sm font-mono text-gray-600 uppercase tracking-wide">Cars Sold</div>
          </div>
          <div>
            <div className="text-3xl font-mono font-bold text-black">95%</div>
            <div className="text-sm font-mono text-gray-600 uppercase tracking-wide">Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-mono font-bold text-black">24H</div>
            <div className="text-sm font-mono text-gray-600 uppercase tracking-wide">Average Sale</div>
          </div>
        </div>
      </div>
    </section>
  );
}
