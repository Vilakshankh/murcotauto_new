'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogHero() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-green-700 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Barlow'] mb-4">
          {t('blog.title')}
        </h1>
        <p className="text-gray-200 text-lg font-light font-['Poppins'] max-w-2xl mx-auto">
          {t('blog.subtitle')}
        </p>
      </div>
    </div>
  );
}
