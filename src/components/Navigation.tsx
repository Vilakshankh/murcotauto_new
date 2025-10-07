'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X, Linkedin, Instagram, Facebook, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
              {t('nav.home')}
            </Link>
            <Link href="/#about-us" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              {t('nav.aboutUs')}
            </Link>
            <Link href="/#benefits" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              {t('nav.benefits')}
            </Link>
            <Link href="/get-started#how-it-works" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              {t('nav.howItWorks')}
            </Link>
            <Link href="/blog" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              {t('nav.blog')}
            </Link>
            <Link href="/get-started#contact" className="text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors tracking-wide">
              {t('nav.contactUs')}
            </Link>
            
            {/* Language Toggle */}
            <div className="flex items-center">
              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Globe className="w-4 h-4 text-white" />
                <span className="tracking-wide">
                  {language === 'en' ? 'FR' : 'EN'}
                </span>
              </button>
            </div>
            
            {/* Sell Button */}
            <Link href="/get-started" className="px-6 py-2.5 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-all tracking-wide">
              {t('nav.sellNow')}
            </Link>
          </div>

          {/* Mobile Sell Button and Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center space-x-1 px-2 py-1.5 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white text-xs font-medium rounded-md transition-all duration-200 shadow-sm"
            >
              <Globe className="w-3 h-3 text-white" />
              <span>
                {language === 'en' ? 'FR' : 'EN'}
              </span>
            </button>
            <Link href="/get-started" className="px-4 py-2 bg-green-700 text-white text-xs font-medium rounded-lg hover:bg-green-600 transition-all tracking-wide">
              {t('nav.sellNow')}
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
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-96 px-6 pt-6 pb-14 bg-white rounded-2xl shadow-[0px_15px_15px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-start items-center gap-6">
              <div className="self-stretch inline-flex justify-between items-center">
                <img 
                  className="w-32 h-10" 
                  src="/15d58f9be544688799a05f2854ca090e81133604.png" 
                  alt="Murcot Auto"
                />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1 text-green-700 hover:text-green-600 transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
              
              <Link 
                href="/get-started" 
                className="self-stretch px-4 py-2 bg-gradient-to-b from-green-700 to-green-600 rounded-[57.83px] inline-flex justify-center items-center gap-2.5"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-center justify-center text-white text-xl font-medium font-['Poppins'] leading-relaxed">{t('nav.readyToSell')}</div>
              </Link>
              
              <Link 
                href="/" 
                className="self-stretch text-center justify-center text-slate-700 text-xl font-medium font-['Poppins'] leading-relaxed hover:text-slate-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home.mobile')}
              </Link>
              
              <Link 
                href="/get-started#how-it-works" 
                className="self-stretch text-center justify-center text-slate-700 text-xl font-medium font-['Poppins'] leading-relaxed hover:text-slate-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.howItWorks.mobile')}
              </Link>
              
              <Link 
                href="/#about-us" 
                className="self-stretch text-center justify-center text-slate-700 text-xl font-medium font-['Poppins'] leading-relaxed hover:text-slate-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.aboutUs.mobile')}
              </Link>
              
              <Link 
                href="/get-started#faq" 
                className="self-stretch text-center justify-center text-slate-700 text-xl font-medium font-['Poppins'] leading-relaxed hover:text-slate-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.faqs.mobile')}
              </Link>
              
              <Link 
                href="/blog" 
                className="self-stretch text-center justify-center text-slate-700 text-xl font-medium font-['Poppins'] leading-relaxed hover:text-slate-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.blog.mobile')}
              </Link>
              
              {/* Mobile Menu Language Toggle */}
              <div className="flex justify-center py-2">
                <button
                  onClick={() => {
                    setLanguage(language === 'en' ? 'fr' : 'en');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white text-lg font-medium font-['Poppins'] rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Globe className="w-5 h-5 text-white" />
                  <span>
                    {language === 'en' ? 'Français' : 'English'}
                  </span>
                </button>
              </div>
              
              <div className="inline-flex justify-center items-center gap-6">
                <button className="text-green-700 hover:text-green-600 transition-colors cursor-pointer">
                  <Linkedin size={24} />
                </button>
                <button className="text-green-700 hover:text-green-600 transition-colors cursor-pointer">
                  <Instagram size={24} />
                </button>
                <button className="text-green-700 hover:text-green-600 transition-colors cursor-pointer">
                  <Facebook size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
