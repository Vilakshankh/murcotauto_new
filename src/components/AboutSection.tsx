'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full">
      {/* Mobile Version */}
      <div className="block md:hidden w-full bg-green-700 inline-flex flex-col justify-start items-center">
        <img 
          className="w-full h-80 object-cover mb-6" 
          src="/aboutus.jpg" 
          alt="About Murcot Auto"
        />
        <div className="w-full px-6 pb-14 flex flex-col gap-4">
          <div className="self-stretch text-center justify-start text-white text-5xl font-extrabold font-['Barlow'] leading-10">
            {t('about.title')}
          </div>
          <div className="self-stretch justify-start">
            <span className="text-white text-base font-normal font-['Poppins'] leading-tight">
              {t('about.description')}
            </span>
            <span className="text-white text-xl font-bold font-['Poppins'] leading-loose">
              {t('about.tagline')}
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex w-full justify-start items-center">
        <div className="flex-1 self-stretch p-14 bg-green-700 flex flex-col justify-center items-center gap-4">
          <div className="self-stretch justify-start text-white text-5xl font-extrabold font-['Barlow'] leading-10">{t('about.title')}</div>
          <div className="self-stretch justify-start">
            <span className="text-white text-base font-normal font-['Poppins'] leading-tight">
              {t('about.description')}
            </span>
            <span className="text-white text-xl font-bold font-['Poppins'] leading-loose">{t('about.tagline')}</span>
          </div>
        </div>
        <img className="w-[552.55px] self-stretch object-cover" src="/aboutus.jpg" alt="About Murcot Auto" />
      </div>
      
      {/* Map Image */}
      <img className="w-full h-72 object-cover" src="/map.png" alt="Murcot Auto Location Map" />
    </section>
  );
}
