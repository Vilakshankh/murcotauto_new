"use client"

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useLanguage } from '@/contexts/LanguageContext'

export default function BenefitsSection() {
  const { t } = useLanguage()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const benefits = [
    {
      id: 'efficient',
      titleKey: 'benefits.efficient.title',
      descriptionKey: 'benefits.efficient.description',
      image: '/efficient-v2.png',
      imageClass: 'w-64 h-56'
    },
    {
      id: 'secure',
      titleKey: 'benefits.secure.title',
      descriptionKey: 'benefits.secure.description',
      image: '/secure-v2.svg',
      imageClass: 'w-60 h-56'
    },
    {
      id: 'hassle-free',
      titleKey: 'benefits.hassleFree.title',
      descriptionKey: 'benefits.hassleFree.description',
      image: '/hasslefree-v2.svg',
      imageClass: 'w-60 h-56'
    }
  ]

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      {/* Mobile Version */}
      <section className="block md:hidden w-full py-14 bg-white inline-flex flex-col justify-start items-center gap-6 overflow-hidden">
        <div className="self-stretch text-center justify-start text-green-700 text-5xl font-extrabold font-['Barlow'] leading-10">
          {t('benefits.title')}
        </div>
        
        <div className="w-full max-w-md h-[635px] relative">
          <Carousel setApi={setApi} className="w-full h-full">
            <CarouselContent className="h-full">
              {benefits.map((benefit) => (
                <CarouselItem key={benefit.id} className="flex items-center justify-center">
                  <div className="w-80 p-14 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex flex-col justify-center items-center gap-6 mx-auto">
                    <img 
                      src={benefit.image} 
                      alt={`${t(benefit.titleKey)} car selling process`} 
                      className={`${benefit.imageClass} object-contain`}
                    />
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch text-center justify-start text-green-700 text-xl font-extrabold font-['Barlow'] leading-normal">
                        {t(benefit.titleKey)}
                      </div>
                      <div className="self-stretch text-center justify-start text-gray-500 text-base font-normal font-['Poppins'] leading-tight">
                        {t(benefit.descriptionKey)}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-gradient-to-b from-green-700 to-green-600 rounded-full shadow-lg border-0">
              <ChevronLeft className="w-4 h-4 text-white" />
            </CarouselPrevious>
            
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-gradient-to-b from-green-700 to-green-600 rounded-full shadow-lg border-0">
              <ChevronRight className="w-4 h-4 text-white" />
            </CarouselNext>
          </Carousel>
          
          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-[30px] absolute bottom-0 left-1/2 transform -translate-x-1/2">
            {benefits.map((_, index) => (
              <button
                key={index}
                className={`w-5 h-5 rounded ${
                  current === index ? 'bg-green-700' : 'bg-gray-300'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
        
        <img 
          className="w-full max-w-md h-16 object-contain" 
          src="/MA_LOGO.png" 
          alt="Murcot Auto"
        />
      </section>

      {/* Desktop Version */}
      <section className="hidden md:block w-full bg-white py-16 sm:py-20">
        <div className="px-6 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="flex justify-center items-center gap-9">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="w-80 p-14 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex flex-col justify-center items-center gap-6">
                <img 
                  src={benefit.image} 
                  alt={`${t(benefit.titleKey)} car selling process`} 
                  className={`${benefit.imageClass} object-contain`}
                />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch text-center justify-start text-green-700 text-xl font-extrabold font-['Barlow'] leading-normal">
                    {t(benefit.titleKey)}
                  </div>
                  <div className="self-stretch text-center justify-start text-gray-500 text-base font-normal font-['Poppins'] leading-tight">
                    {t(benefit.descriptionKey)}
                  </div>
                </div>
              </div>
            ))}
            </div>
            
            {/* Murcot Auto Logo */}
            <div className="mt-16 sm:mt-20">
              <img 
                src="/MA_LOGO.png" 
                alt="Murcot Auto" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
