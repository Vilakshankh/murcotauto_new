export default function HeroSection() {
  return (
    <section className="w-full h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-8 h-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content Side */}
        <div className="space-y-12">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-mono font-bold text-black leading-none tracking-tight">
              SELL YOUR<br />
              CAR
            </h1>
            
            <div className="w-24 h-1 bg-black"></div>
            
            <p className="text-lg text-gray-600 font-mono leading-relaxed max-w-md">
              Fast, transparent, and hassle-free car selling process. Get your quote in minutes.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-black text-white font-mono text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">
              Get Quote
            </button>
            
            <button className="px-8 py-4 border border-gray-300 text-black font-mono text-sm uppercase tracking-wide hover:bg-gray-50 transition-colors">
              Learn Process
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-mono font-bold text-black">200K+</div>
              <div className="text-sm font-mono text-gray-600 uppercase tracking-wide">Cars Sold</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-black">30Y</div>
              <div className="text-sm font-mono text-gray-600 uppercase tracking-wide">Experience</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-black">24H</div>
              <div className="text-sm font-mono text-gray-600 uppercase tracking-wide">Fast Process</div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="hidden lg:block">
          <div className="aspect-square bg-gray-100 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Car" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-white px-6 py-4">
              <div className="text-sm font-mono text-black uppercase tracking-wide">
                Professional Valuation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
