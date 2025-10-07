"use client"

import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useLanguage } from '@/contexts/LanguageContext'

export default function HowItWorksSection() {
  const { t } = useLanguage()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const steps = [
    {
      id: 1,
      titleKey: 'howItWorks.step1.title',
      descriptionKey: 'howItWorks.step1.description'
    },
    {
      id: 2,
      titleKey: 'howItWorks.step2.title',
      descriptionKey: 'howItWorks.step2.description'
    },
    {
      id: 3,
      titleKey: 'howItWorks.step3.title',
      descriptionKey: 'howItWorks.step3.description'
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
      <section className="block md:hidden w-full py-14 bg-gradient-to-b from-green-700 to-green-600 flex flex-col justify-center items-center gap-6">
        <div className="w-full max-w-md justify-start text-white text-5xl font-extrabold font-['Barlow'] leading-10 text-left px-6">
          {t('howItWorks.title')}
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => api?.scrollTo(Math.max(0, current - 1))}
            className="w-9 h-9 bg-white rounded-full shadow-lg border-0 flex items-center justify-center"
            disabled={current === 0}
          >
            <ChevronUp className="w-4 h-4 text-green-700" />
          </button>
        </div>
        
        <div className="w-full max-w-md h-64 py-6 flex flex-col justify-center items-center gap-6 overflow-hidden">
          <Carousel 
            setApi={setApi} 
            orientation="vertical" 
            className="w-full h-full"
            opts={{
              align: "center",
              loop: false,
            }}
          >
            <CarouselContent className="h-full -mt-4">
              {steps.map((step) => (
                <CarouselItem key={step.id} className="pt-4 pb-4 basis-full">
                  <div className="px-6 pt-6 pb-8 bg-white rounded-[10px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03)] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08)] outline outline-2 outline-offset-[-2px] outline-green-700 flex flex-col justify-start items-start gap-6 mx-6">
                    <div className="self-stretch flex flex-col justify-start items-start gap-6">
                      <div className="self-stretch flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch text-center justify-start text-green-700 text-base font-bold font-['Poppins'] uppercase leading-relaxed tracking-[3px]">
                          step {step.id}
                        </div>
                        <div className="self-stretch text-center justify-start text-slate-700 text-xl font-extrabold font-['Barlow'] leading-normal">
                          {t(step.titleKey)}
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-3">
                          <div className="self-stretch text-center justify-start text-gray-500 text-base font-normal font-['Poppins'] leading-tight">
                            {t(step.descriptionKey)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {/* Bottom Navigation Button */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => api?.scrollTo(Math.min(steps.length - 1, current + 1))}
            className="w-9 h-9 bg-white rounded-full shadow-lg border-0 flex items-center justify-center"
            disabled={current === steps.length - 1}
          >
            <ChevronDown className="w-4 h-4 text-green-700" />
          </button>
        </div>
      </section>

      {/* Desktop Version */}
      <section className="hidden md:block w-full bg-white py-16 sm:py-20">
        <div className="w-full px-6 py-14 bg-white flex flex-col justify-start items-center gap-6">
          <div className="justify-start text-green-700 text-5xl font-extrabold font-['Barlow'] leading-10">{t('howItWorks.title')}</div>
          <div className="flex justify-start items-center gap-14">
            {steps.map((step) => (
              <div key={step.id} className="w-96 px-6 pt-6 pb-8 bg-white rounded-[10px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03)] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08)] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch text-center justify-start text-green-700 text-base font-bold font-['Poppins'] uppercase leading-relaxed tracking-[3px]">step {step.id}</div>
                    <div className="self-stretch text-center justify-start text-slate-700 text-xl font-extrabold font-['Barlow'] leading-normal">{t(step.titleKey)}</div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch text-center justify-start text-gray-500 text-base font-normal font-['Poppins'] leading-tight">{t(step.descriptionKey)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}