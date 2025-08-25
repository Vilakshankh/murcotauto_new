import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative px-6 sm:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24">
      {/* Blurred background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/herobackgroundoriginal.jpg)',
          filter: 'blur(2px)'
        }}
      ></div>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl w-full">
        {/* Main Hero Content */}

        <h1 className="heading-primary-dark text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 leading-tight">
        Selling your car, made easy
        </h1>
        <p className="text-primary-dark text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-6 sm:mb-8 leading-relaxed">
        No hassle, Fair price. Done right.
        </p>
        <Link href="/get-started" className="btn-primary-light text-sm sm:text-base">
          GET STARTED
        </Link>
      </div>
      </div>
  );
}
