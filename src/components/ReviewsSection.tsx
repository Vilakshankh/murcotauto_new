
export default function ReviewsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 mt-16 sm:mt-32">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Side - Title */}
            <div className="lg:col-span-1">
              <h2 className="text-black text-base sm:text-lg font-light tracking-tight leading-tight mb-4 lg:mb-0">
                Driven by the numbers
              </h2>
            </div>

            {/* Right Side - Stats and Brand Logos */}
            <div className="lg:col-span-4">
              
              {/* Stats */}
              <div className="flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-8 lg:gap-16 mb-12 sm:mb-16">
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-numbers text-black tracking-tight mb-2">
                    50,000+
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-light tracking-wide">
                    Cars sold
                  </p>
                </div>
                
                <div className="hidden sm:block w-px h-12 sm:h-16 bg-slate-300"></div>
                
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-numbers text-black tracking-tight mb-2">
                    1991
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-light tracking-wide">
                    In business since
                  </p>
                </div>
                
                <div className="hidden sm:block w-px h-12 sm:h-16 bg-slate-300"></div>

                <div className="text-left">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-numbers text-black tracking-tight mb-2">
                    &lt;1 week
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-light tracking-wide">
                    Done Deal
                  </p>
                </div>
              </div>
              
              {/* Brand Logos Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-2 items-center justify-items-center sm:justify-items-start">
                <img 
                  src="/hyundai-motor-company-2-logo-svgrepo-com.svg" 
                  alt="Hyundai" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="/volkswagen-6-logo-svgrepo-com%20(1).svg" 
                  alt="Volkswagen" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="/kia-svgrepo-com.svg" 
                  alt="Kia" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="/ford-svgrepo-com.svg" 
                  alt="Ford" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="/dodge-svgrepo-com.svg" 
                  alt="Dodge" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="/honda-9-logo-svgrepo-com.svg" 
                  alt="Honda" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="/mercedes-benz-svgrepo-com.svg" 
                  alt="Mercedes" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="/toyota-1-logo-svgrepo-com.svg" 
                  alt="Toyota" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="/lexus-logo-svgrepo-com.svg" 
                  alt="Lexus" 
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
