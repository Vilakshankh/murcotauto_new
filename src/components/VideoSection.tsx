"use client"

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function VideoSection() {
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  return (
    <>
      {/* Video Overlay Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl max-h-[80vh] bg-black rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Video Player */}
            <video
              className="w-full h-auto max-h-[75vh] object-contain"
              controls
              autoPlay
              playsInline
            >
              <source src="/e3b9d97fe2814836828702cf05281e1d-1.mov" type="video/quicktime" />
              <source src="/e3b9d97fe2814836828702cf05281e1d-1.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeVideo}
          />
        </div>
      )}

      {/* Main Video Section */}
    <section 
      className="w-full h-[418px] relative bg-cover flex items-center justify-center"
      style={{
        backgroundImage: 'url(/e69376d8bd4e1d6295e9c6f66591f85a1c02d0e1.png)',
        backgroundPosition: 'center 25%',
      }}
    >
      {/* Overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content Container */}
      <div className="relative w-full max-w-[1400px] px-6 md:px-16 lg:px-64 py-12 md:py-24 lg:py-44">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          {/* How it Works Text */}
          <div className="text-right text-white text-3xl md:text-4xl lg:text-[42px] font-bold font-['DM Sans'] leading-tight md:leading-[52px]">
            {t('video.howItWorks')}
          </div>
          
          {/* Play Button */}
          <div className="relative">
            <button 
              onClick={openVideo}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-[70px] lg:h-[70px] bg-green-700 hover:bg-green-800 rounded-full flex items-center justify-center transition-colors group"
            >
              <Play className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
            </button>
          </div>
          
          {/* Watch Our Video Text */}
          <div className="text-left text-white text-3xl md:text-4xl lg:text-[42px] font-bold font-['DM Sans'] leading-tight md:leading-[52px]">
            {t('video.watchOurVideo')}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
