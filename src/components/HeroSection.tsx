import { Zap, Eye, DollarSign } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24">
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

        <h1 className="heading-primary-dark text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">
        Selling your car, made easy
        </h1>
        <p className="text-primary-dark text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed">
        No hassle, Fair price. Done right.
        </p>
        <button className="btn-primary-light text-sm sm:text-base">
          GET STARTED
        </button>
      </div>
      </div>
  );
}
