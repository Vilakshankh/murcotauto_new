export default function HeroSection() {
  return (
    <div className="relative w-full h-screen min-h-[500px] max-h-[900px]">
      {/* Background Image */}
      <div 
        className="w-full h-full bg-cover bg-center bg-gray-400"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Overlay Container */}
        <div className="absolute inset-0 pt-16 md:pt-20 lg:pt-[100px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            {/* Content Container */}
            <div className="relative w-full max-w-4xl">
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black/50 rounded-2xl lg:rounded-3xl -m-4 sm:-m-6 lg:-m-8"></div>
              
              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6 lg:p-8 text-center lg:text-left">
                {/* Main Heading */}
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-barlow font-extrabold leading-tight mb-4 sm:mb-6 lg:mb-8">
                  Selling your car,<br />made easy!
                </h1>
                
                {/* Description */}
                <p className="text-white text-sm sm:text-base lg:text-lg font-poppins font-normal leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-lg lg:max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 items-center justify-center lg:justify-start">
                  {/* Get Started Button */}
                  <button className="w-full sm:w-auto px-6 lg:px-8 h-12 lg:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors min-w-[140px] lg:min-w-[160px]">
                    <span className="text-[#328640] text-sm lg:text-base xl:text-lg font-poppins font-medium">
                      Get Started
                    </span>
                  </button>
                  
                  {/* Learn More Button */}
                  <button className="w-full sm:w-auto px-6 lg:px-8 h-12 lg:h-14 border-2 border-white/30 rounded-full flex items-center justify-center hover:border-white/50 transition-all min-w-[140px] lg:min-w-[160px]">
                    <span className="text-white text-sm lg:text-base xl:text-lg font-poppins font-medium">
                      Learn More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
