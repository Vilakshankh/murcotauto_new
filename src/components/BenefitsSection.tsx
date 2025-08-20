export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 xl:py-[86px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[197px]">
        {/* Section Heading */}
        <h2 className="text-center text-[#33853F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-barlow font-extrabold leading-tight mb-12 md:mb-16 lg:mb-20">
          Our Benefits
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 xl:gap-12">
          {/* Benefit 1 - Efficient */}
          <div className="flex flex-col items-center text-center">
            {/* Icon/Image */}
            <div className="w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-[234px] mb-4 lg:mb-[17px] bg-gradient-to-br from-[#328640] to-[#41A552] rounded-2xl flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="space-y-4 lg:space-y-[26px]">
              <h3 className="text-[#1F4F27] text-lg md:text-xl font-poppins font-medium leading-tight">
                Efficient
              </h3>
              <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl font-poppins font-normal leading-relaxed max-w-xs">
                Quick and streamlined car selling process. Get your car valued and sold within days, not weeks.
              </p>
            </div>
          </div>

          {/* Benefit 2 - Secure */}
          <div className="flex flex-col items-center text-center">
            {/* Icon/Image */}
            <div className="w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-[234px] mb-4 lg:mb-[17px] bg-gradient-to-br from-[#328640] to-[#41A552] rounded-2xl flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="space-y-4 lg:space-y-[26px]">
              <h3 className="text-[#1F4F27] text-lg md:text-xl font-poppins font-medium leading-tight">
                Secure
              </h3>
              <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl font-poppins font-normal leading-relaxed max-w-xs">
                Safe and trusted transactions with verified buyers. All documentation handled professionally and securely.
              </p>
            </div>
          </div>

          {/* Benefit 3 - Hassle-free */}
          <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
            {/* Icon/Image */}
            <div className="w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-[234px] mb-4 lg:mb-[17px] bg-gradient-to-br from-[#328640] to-[#41A552] rounded-2xl flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            {/* Content */}
            <div className="space-y-4 lg:space-y-[26px]">
              <h3 className="text-[#1F4F27] text-lg md:text-xl font-poppins font-medium leading-tight">
                Hassle-free
              </h3>
              <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl font-poppins font-normal leading-relaxed max-w-xs">
                No paperwork worries or complex procedures. We handle everything from valuation to final transfer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
