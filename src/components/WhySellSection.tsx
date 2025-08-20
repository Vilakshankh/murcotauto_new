export default function WhySellSection() {
  return (
    <section className="w-full bg-[#33853F] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-[54px]">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 xl:w-[818px] flex justify-center lg:justify-start">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-none lg:w-full lg:h-[400px] xl:h-[673px] bg-gray-300 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Car selling process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 xl:w-[473px] flex flex-col justify-center text-center lg:text-left space-y-6 lg:space-y-8 xl:space-y-10">
            {/* Main Heading */}
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-barlow font-extrabold leading-tight">
              Why sell to Murcot Auto?
            </h2>

            {/* Benefits List */}
            <div className="text-white text-base sm:text-lg lg:text-xl xl:text-xl font-poppins font-semibold leading-relaxed lg:leading-[40px] space-y-4 lg:space-y-2">
              <div className="flex items-start lg:items-center gap-3">
                <span className="text-green-200 text-xl lg:text-2xl mt-1 lg:mt-0">✓</span>
                <span>Sell from the Comfort of Your Home</span>
              </div>
              <div className="flex items-start lg:items-center gap-3">
                <span className="text-green-200 text-xl lg:text-2xl mt-1 lg:mt-0">✓</span>
                <span>Sell with ease and save on taxes when purchasing your next vehicle</span>
              </div>
              <div className="flex items-start lg:items-center gap-3">
                <span className="text-green-200 text-xl lg:text-2xl mt-1 lg:mt-0">✓</span>
                <span>We Buy Out Both Financed & Leased Vehicles</span>
              </div>
              <div className="flex items-start lg:items-center gap-3">
                <span className="text-green-200 text-xl lg:text-2xl mt-1 lg:mt-0">✓</span>
                <span>Safe & Worry-Free Process</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="w-full sm:w-auto max-w-sm lg:max-w-none lg:w-full xl:w-[473px] h-14 lg:h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-[#33853F] text-lg lg:text-xl font-poppins font-medium">
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
