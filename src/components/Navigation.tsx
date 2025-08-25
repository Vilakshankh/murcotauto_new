'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-16 md:h-20 lg:h-24 bg-white/95 backdrop-blur-sm fixed top-0 left-0 z-30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <img 
                src="/15d58f9be544688799a05f2854ca090e81133604.png" 
                alt="Murcot Auto" 
                className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              HOME
            </Link>
            <Link href="/#about-us" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              ABOUT US
            </Link>
            <Link href="/#benefits" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              BENEFITS
            </Link>
            <Link href="/get-started" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              HOW IT WORKS
            </Link>
            <Link href="/#contact-us" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              CONTACT US
            </Link>
            
            {/* Sell Button */}
            <Link href="/get-started" className="px-6 py-2.5 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-all tracking-wide">
              SELL NOW
            </Link>
          </div>

          {/* Mobile Sell Button and Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link href="/get-started" className="px-4 py-2 bg-green-700 text-white text-xs font-medium rounded-lg hover:bg-green-600 transition-all tracking-wide">
              SELL NOW
            </Link>
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-slate-800 mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-slate-800 mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-slate-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed top-16 md:top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-slate-700 text-lg font-medium hover:text-slate-900 transition-colors py-2">
                HOME
              </Link>
              <Link href="/#about-us" className="block text-slate-700 text-lg font-medium hover:text-slate-900 transition-colors py-2">
                ABOUT US
              </Link>
              <Link href="/#benefits" className="block text-slate-700 text-lg font-medium hover:text-slate-900 transition-colors py-2">
                BENEFITS
              </Link>
              <Link href="/get-started" className="block text-slate-700 text-lg font-medium hover:text-slate-900 transition-colors py-2">
                HOW IT WORKS
              </Link>
              <Link href="/#contact-us" className="block text-slate-700 text-lg font-medium hover:text-slate-900 transition-colors py-2">
                CONTACT US
              </Link>
              <Link href="/get-started" className="block w-full mt-4 px-6 py-3 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-all tracking-wide text-center">
                SELL NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
