export default function HowItWorksSection() {
  return (
    <section className="w-full bg-[#33853F] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-barlow font-extrabold leading-tight mb-8 lg:mb-12">
          Selling Your Vehicle to Murcot Auto is Easy
        </h2>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-[54px] mb-8 lg:mb-12">
          {/* Step 1 */}
          <div className="bg-white rounded-lg border-2 border-[#33853F] shadow-sm p-6 lg:p-8">
            <div className="text-center space-y-3 lg:space-y-4">
              <div className="text-[#33853F] text-sm font-poppins font-bold uppercase tracking-[3px] leading-[26px]">
                Step 1
              </div>
              <h3 className="text-[#1F1F1F] text-lg lg:text-xl font-barlow font-extrabold leading-tight">
                Tell Us About Your Vehicle
              </h3>
              <p className="text-[#667085] text-sm lg:text-base font-poppins font-normal leading-relaxed">
                Fill out our quick online form with your vehicle's details. It only takes a minute — and the more info and photos you provide, the more accurate our offer will be.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg border-2 border-[#33853F] shadow-sm p-6 lg:p-8">
            <div className="text-center space-y-3 lg:space-y-4">
              <div className="text-[#33853F] text-sm font-poppins font-bold uppercase tracking-[3px] leading-[26px]">
                Step 2
              </div>
              <h3 className="text-[#1F1F1F] text-lg lg:text-xl font-barlow font-extrabold leading-tight">
                Get a Cash Offer Fast
              </h3>
              <p className="text-[#667085] text-sm lg:text-base font-poppins font-normal leading-relaxed">
                We review your submission and send you a competitive, no-obligation offer — usually within the hour. No pressure, no games.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg border-2 border-[#33853F] shadow-sm p-6 lg:p-8 md:col-span-2 lg:col-span-1">
            <div className="text-center space-y-3 lg:space-y-4">
              <div className="text-[#33853F] text-sm font-poppins font-bold uppercase tracking-[3px] leading-[26px]">
                Step 3
              </div>
              <h3 className="text-[#1F1F1F] text-lg lg:text-xl font-barlow font-extrabold leading-tight">
                Free Pickup or Dealership Coordination
              </h3>
              <p className="text-[#667085] text-sm lg:text-base font-poppins font-normal leading-relaxed">
                We'll come to you — at home, work, or even your dealership if you're trading in for a new car.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-8 lg:px-12 py-3 lg:py-4 bg-black rounded-lg hover:bg-gray-800 transition-colors">
            <span className="text-white text-lg lg:text-xl font-poppins font-medium">
              sell now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
