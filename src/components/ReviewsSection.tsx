export default function ReviewsSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-center text-[#33853F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-barlow font-extrabold leading-tight mb-8 lg:mb-12">
          What they say about us!
        </h2>

        {/* Reviews Container */}
        <div className="relative mb-8 lg:mb-12">
          {/* Desktop Grid View */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {/* Review Card 1 */}
            <div className="bg-white border-2 border-[#707070] rounded-lg p-6 h-80 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b9e4fefe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Customer" 
                  className="w-16 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-[#1F4F27] text-sm xl:text-base font-poppins leading-relaxed">
                    Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-black/30 text-sm font-poppins font-bold uppercase tracking-wider">
                  Rayhan Curran
                </p>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white border-2 border-[#707070] rounded-lg p-6 h-80 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Customer" 
                  className="w-16 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-[#1F4F27] text-sm xl:text-base font-poppins leading-relaxed">
                    Amazing service and incredibly fast process. Sold my car in just 2 days with no hassle. Highly recommend to anyone looking to sell quickly!
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-black/30 text-sm font-poppins font-bold uppercase tracking-wider">
                  Sarah Johnson
                </p>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white border-2 border-[#707070] rounded-lg p-6 h-80 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Customer" 
                  className="w-16 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-[#1F4F27] text-sm xl:text-base font-poppins leading-relaxed">
                    Professional team and transparent pricing. They handled all the paperwork and made the entire selling experience stress-free.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-black/30 text-sm font-poppins font-bold uppercase tracking-wider">
                  Michael Chen
                </p>
              </div>
            </div>

            {/* Review Card 4 */}
            <div className="bg-white border-2 border-[#707070] rounded-lg p-6 h-80 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Customer" 
                  className="w-16 h-24 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-[#1F4F27] text-sm xl:text-base font-poppins leading-relaxed">
                    Got the best price for my car compared to other dealers. The online valuation was accurate and the pickup was convenient.
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-black/30 text-sm font-poppins font-bold uppercase tracking-wider">
                  Emma Davis
                </p>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Horizontal Scroll */}
          <div className="lg:hidden overflow-x-auto pb-4">
            <div className="flex gap-4 w-max">
              {/* Review Card 1 Mobile */}
              <div className="bg-white border-2 border-[#707070] rounded-lg p-4 w-80 sm:w-96 h-64 flex flex-col flex-shrink-0">
                <div className="flex items-start gap-3 mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b9e4fefe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                    alt="Customer" 
                    className="w-12 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-[#1F4F27] text-sm font-poppins leading-relaxed">
                      Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-black/30 text-xs font-poppins font-bold uppercase tracking-wider">
                    Rayhan Curran
                  </p>
                </div>
              </div>

              {/* Review Card 2 Mobile */}
              <div className="bg-white border-2 border-[#707070] rounded-lg p-4 w-80 sm:w-96 h-64 flex flex-col flex-shrink-0">
                <div className="flex items-start gap-3 mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                    alt="Customer" 
                    className="w-12 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-[#1F4F27] text-sm font-poppins leading-relaxed">
                      Amazing service and incredibly fast process. Sold my car in just 2 days with no hassle. Highly recommend!
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-black/30 text-xs font-poppins font-bold uppercase tracking-wider">
                    Sarah Johnson
                  </p>
                </div>
              </div>

              {/* Review Card 3 Mobile */}
              <div className="bg-white border-2 border-[#707070] rounded-lg p-4 w-80 sm:w-96 h-64 flex flex-col flex-shrink-0">
                <div className="flex items-start gap-3 mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                    alt="Customer" 
                    className="w-12 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-[#1F4F27] text-sm font-poppins leading-relaxed">
                      Professional team and transparent pricing. They handled all the paperwork and made it stress-free.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-black/30 text-xs font-poppins font-bold uppercase tracking-wider">
                    Michael Chen
                  </p>
                </div>
              </div>

              {/* Review Card 4 Mobile */}
              <div className="bg-white border-2 border-[#707070] rounded-lg p-4 w-80 sm:w-96 h-64 flex flex-col flex-shrink-0">
                <div className="flex items-start gap-3 mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                    alt="Customer" 
                    className="w-12 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-[#1F4F27] text-sm font-poppins leading-relaxed">
                      Got the best price for my car compared to other dealers. The online valuation was accurate.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-black/30 text-xs font-poppins font-bold uppercase tracking-wider">
                    Emma Davis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Logo/Brand Element */}
        <div className="flex justify-center">
          <div className="w-64 sm:w-80 lg:w-[325px] h-16 sm:h-20 lg:h-[82px] border-2 border-[#328640] rounded-lg flex items-center justify-center bg-gray-50">
            <span className="text-[#328640] font-poppins text-sm sm:text-base font-medium">Brand Logo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
