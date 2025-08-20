export default function Navigation() {
  return (
    <nav className="w-full h-20 bg-white border-b border-gray-100 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-mono font-bold text-black tracking-tight">
            MURCOT
          </span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12">
          <a href="#" className="text-sm font-mono text-gray-600 hover:text-black transition-colors uppercase tracking-wide">
            Process
          </a>
          <a href="#" className="text-sm font-mono text-gray-600 hover:text-black transition-colors uppercase tracking-wide">
            About
          </a>
          <a href="#" className="text-sm font-mono text-gray-600 hover:text-black transition-colors uppercase tracking-wide">
            Contact
          </a>
          
          {/* Sell Button */}
          <button className="px-6 py-2 bg-black text-white text-sm font-mono uppercase tracking-wide hover:bg-gray-800 transition-colors">
            Sell Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col space-y-1">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>
    </nav>
  );
}
