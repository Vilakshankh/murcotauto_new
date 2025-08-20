export default function FooterSection() {
  return (
    <footer className="w-full bg-[#1F1F1F] py-12 md:py-16 lg:py-[74px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[115px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-[57px]">
          
          {/* Main Content - Left Side */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 lg:space-y-8">
            {/* Main Heading */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-barlow font-extrabold leading-tight max-w-lg">
              200,000 satisfied customers since 1993
            </h2>

            {/* Description */}
            <p className="text-white text-sm lg:text-[15px] font-poppins font-normal leading-relaxed max-w-sm">
              We've tailored our services to provide the best experience for our customers since day 1.
            </p>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 max-w-[230px] h-10 px-4 rounded-full border-2 border-white/20 bg-transparent text-white text-sm lg:text-lg font-poppins placeholder-white/40 focus:border-white/50 focus:outline-none"
              />
              <button className="w-full sm:w-[140px] h-10 bg-gradient-to-r from-white to-[#E5E5E5] rounded-full hover:from-gray-100 hover:to-gray-200 transition-colors">
                <span className="text-[#328640] text-lg lg:text-xl font-poppins font-medium">
                  Subscribe
                </span>
              </button>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 lg:gap-6 text-white text-xs lg:text-[13px] font-poppins font-normal">
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Learn More</a>
            </div>
          </div>

          {/* About Links */}
          <div className="lg:col-span-2 space-y-2 lg:space-y-[7px]">
            <h3 className="text-white text-lg lg:text-xl font-poppins font-medium leading-[26px] mb-4">
              About
            </h3>
            <div className="space-y-1 lg:space-y-[7px]">
              <a href="#" className="block text-white text-sm lg:text-base font-poppins font-normal leading-[26px] hover:text-gray-300 transition-colors">
                Benefits
              </a>
              <a href="#" className="block text-white text-sm lg:text-base font-poppins font-normal leading-[26px] hover:text-gray-300 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2 space-y-2 lg:space-y-[7px]">
            <h3 className="text-white text-lg lg:text-xl font-poppins font-medium leading-[26px] mb-4">
              Resources
            </h3>
            <div className="space-y-1 lg:space-y-[7px]">
              <a href="#" className="block text-white text-sm lg:text-base font-poppins font-normal leading-[26px] hover:text-gray-300 transition-colors">
                How it works?
              </a>
              <a href="#" className="block text-white text-sm lg:text-base font-poppins font-normal leading-[26px] hover:text-gray-300 transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-white text-sm lg:text-base font-poppins font-normal leading-[26px] hover:text-gray-300 transition-colors">
                Blog
              </a>
            </div>
          </div>

          {/* CTA and Logo - Right Side */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-center gap-6 lg:gap-8">
            {/* Ready to Sell Button */}
            <button className="w-full sm:w-auto min-w-[170px] h-[50px] bg-white rounded-full hover:bg-gray-100 transition-colors">
              <span className="text-[#1F4F27] text-lg lg:text-xl font-poppins font-medium">
                Ready to sell!
              </span>
            </button>

            {/* Logo Placeholder */}
            <div className="w-full max-w-[235px] h-[74px] bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 font-poppins text-sm">Murcot Auto Logo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
