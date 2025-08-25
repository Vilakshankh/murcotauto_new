export default function AboutSection() {
  return (
    <section className="w-full bg-green-700 py-16 sm:py-20">
      <div className="px-6 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Side - Small About Us Label */}
            <div className="lg:col-span-1">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-xl font-light tracking-tight leading-tight mb-4 lg:mb-0">
                About us
              </h2>
            </div>

            {/* Right Side - Large Condensed Paragraph */}
            <div className="lg:col-span-4">
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight tracking-tight">
                Founded in 1991 in the heart of Canada&apos;s used car wholesale world, Murcot Auto built strong ties with dealerships, exporters, and buyers nationwide. In the last 10+ years, we expanded to buy directly from the public, helping thousands of sellers get top value without the pressure, trade-in tactics, or wasted time of private sales. Straightforward. Experienced. Trusted since 1991.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
