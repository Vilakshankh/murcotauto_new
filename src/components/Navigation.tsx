'use client';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-16 md:h-20 lg:h-24 bg-white/95 backdrop-blur-sm fixed top-0 left-0 z-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/15d58f9be544688799a05f2854ca090e81133604.png" 
              alt="Murcot Auto" 
              className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              PROCESS
            </a>
            <a href="#" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              ABOUT
            </a>
            <a href="#" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              FAQ
            </a>
            
            {/* Sell Button */}
            <button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all tracking-wide">
              SELL NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-slate-800 mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-slate-800 mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-slate-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed top-16 md:top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-slate-700 text-lg font-medium hover:text-slate-900 transition-colors py-2">
                PROCESS
              </a>
              <a href="#" className="block text-slate-700 text-lg font-medium hover:text-slate-900 transition-colors py-2">
                ABOUT
              </a>
              <a href="#" className="block text-slate-700 text-lg font-medium hover:text-slate-900 transition-colors py-2">
                FAQ
              </a>
              <button className="w-full mt-4 px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all tracking-wide">
                SELL NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
