export default function AboutSection() {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[500px]">
        {/* Content Side - Left */}
        <div className="flex-1 bg-[#33853F] p-8 md:p-12 lg:p-16 xl:p-[60px] flex flex-col justify-center">
          <div className="space-y-4 lg:space-y-[18px] max-w-2xl">
            {/* Heading */}
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-barlow font-extrabold leading-tight">
              About Us
            </h2>

            {/* Content */}
            <div className="text-white space-y-6">
              <div className="text-sm md:text-base lg:text-base font-poppins font-normal leading-relaxed">
                <p className="mb-4">
                  Murcot Auto was founded in 1993, starting in the heart of the used car wholesale world — buying and selling vehicles through auctions and between dealers across Canada. Over time, we built strong ties with dealerships, exporters, and buyers, becoming a trusted name nationwide.
                </p>
                
                <p className="mb-6">
                  In the last 10+ years, we expanded to buy directly from the public, helping thousands of sellers get top value without the pressure, trade-in tactics, or wasted time of private sales.
                </p>
              </div>

              {/* Highlighted Tagline */}
              <div className="text-white text-lg md:text-xl lg:text-[22px] font-poppins font-bold leading-relaxed lg:leading-[32px]">
                Straightforward. Experienced. Trusted since 1993.
              </div>
            </div>
          </div>
        </div>

        {/* Image Side - Right */}
        <div className="flex-1 min-h-[300px] lg:min-h-auto">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Murcot Auto dealership and team" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
