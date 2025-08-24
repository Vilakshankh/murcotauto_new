export default function FooterSection() {
  return (
    <footer className="w-full bg-[#1F1F1F] py-12 sm:py-16 lg:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Main Content - Left Side */}
            <div className="sm:col-span-2 lg:col-span-6 space-y-6 sm:space-y-8">
              {/* Main Heading */}
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight">
                200,000 satisfied customers since 1993
              </h2>

              {/* Description */}
              <p className="text-gray-300 font-light leading-relaxed max-w-md text-sm sm:text-base">
                We've tailored our services to provide the best experience for our customers since day 1.
              </p>

              {/* Newsletter Signup */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 max-w-[250px] h-10 px-4 rounded-full border border-gray-600 bg-transparent text-white text-sm font-light placeholder-gray-400 focus:border-gray-400 focus:outline-none"
                />
                <button className="w-full sm:w-auto px-6 h-10 bg-white text-slate-900 rounded-full hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium tracking-wide">
                    Subscribe
                  </span>
                </button>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm font-light">
                <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Learn More</a>
              </div>
            </div>

            {/* About Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white text-base sm:text-lg font-light mb-3 sm:mb-4">
                About
              </h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 text-sm font-light hover:text-white transition-colors">
                  Benefits
                </a>
                <a href="#" className="block text-gray-300 text-sm font-light hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Resources Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white text-base sm:text-lg font-light mb-3 sm:mb-4">
                Resources
              </h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 text-sm font-light hover:text-white transition-colors">
                  How it works
                </a>
                <a href="#" className="block text-gray-300 text-sm font-light hover:text-white transition-colors">
                  FAQ
                </a>
                <a href="#" className="block text-gray-300 text-sm font-light hover:text-white transition-colors">
                  Blog
                </a>
              </div>
            </div>

            {/* CTA and Logo - Right Side */}
            <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-6 sm:gap-8">
              {/* Ready to Sell Button */}
              <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-slate-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-all tracking-wide shadow-lg">
                SELL NOW
              </button>

              {/* Logo */}
              <div className="flex items-center">
                <img 
                  src="/41bb9e933e7fcfc1b9b023b89c0c3346e8f2e37d.png" 
                  alt="Murcot Auto" 
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
