export default function Navigation() {
  return (
    <nav className="w-full h-16 md:h-20 lg:h-[100px] bg-white absolute top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="w-24 md:w-32 lg:w-[170px] h-8 md:h-10 lg:h-[53px] flex items-center">
          <div className="w-full h-full bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-600 font-poppins text-xs md:text-sm">Logo</span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-12">
          <a href="#" className="text-[#1F4F27] text-base xl:text-lg font-poppins font-medium hover:text-[#328640] transition-colors whitespace-nowrap">
            How it works
          </a>
          <a href="#" className="text-[#1F4F27] text-base xl:text-lg font-poppins font-medium hover:text-[#328640] transition-colors">
            About
          </a>
          <a href="#" className="text-[#1F4F27] text-base xl:text-lg font-poppins font-medium hover:text-[#328640] transition-colors">
            F.A.Q.
          </a>
          <a href="#" className="text-[#1F4F27] text-base xl:text-lg font-poppins font-medium hover:text-[#328640] transition-colors">
            Blog
          </a>
          
          {/* Sell Today Button */}
          <button className="px-4 xl:px-6 h-9 xl:h-10 bg-gradient-to-b from-[#328640] to-[#41A552] rounded-full flex items-center justify-center hover:from-[#2a7038] hover:to-[#359447] transition-all whitespace-nowrap">
            <span className="text-white text-sm xl:text-base font-poppins font-medium">
              Sell today!
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden flex flex-col space-y-1 p-2">
          <div className="w-5 h-0.5 bg-[#1F4F27]"></div>
          <div className="w-5 h-0.5 bg-[#1F4F27]"></div>
          <div className="w-5 h-0.5 bg-[#1F4F27]"></div>
        </button>
      </div>
    </nav>
  );
}
