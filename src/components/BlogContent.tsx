'use client';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogContent() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-2">
            Murcot Auto • Mar 15 • 3 min read
          </div>
          <h1 className="text-slate-900 text-3xl md:text-4xl font-bold font-['Barlow'] mb-4">
            {t('blogContent.title')}
          </h1>
          <p className="text-slate-600 text-lg font-light font-['Poppins'] leading-relaxed">
            {t('blogContent.subtitle')}
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                {t('blogContent.section1.title')}
              </h2>
              <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                {t('blogContent.section1.description')}
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section1.makeModel').split(' – ')[0]}</strong> – {t('blogContent.section1.makeModel').split(' – ')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section1.ageMileage').split(' – ')[0]}</strong> – {t('blogContent.section1.ageMileage').split(' – ')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section1.condition').split(' – ')[0]}</strong> – {t('blogContent.section1.condition').split(' – ')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section1.marketDemand').split(' – ')[0]}</strong> – {t('blogContent.section1.marketDemand').split(' – ')[1]}
                  </span>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-medium font-['Poppins']">
                  {t('blogContent.section1.cta')}
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                {t('blogContent.section2.title')}
              </h2>
              <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                {t('blogContent.section2.description')}
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section2.clean').split(' – ')[0]}</strong> – {t('blogContent.section2.clean').split(' – ')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section2.repairs').split(' – ')[0]}</strong> – {t('blogContent.section2.repairs').split(' – ')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section2.paperwork').split(' – ')[0]}</strong> – {t('blogContent.section2.paperwork').split(' – ')[1]}
                  </span>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                {t('blogContent.section3.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3">{t('blogContent.section3.option1.title')}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-lg">✔️</span>
                      <span className="text-slate-600 font-light font-['Poppins']">{t('blogContent.section3.option1.pro')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">❌</span>
                      <span className="text-slate-600 font-light font-['Poppins']">{t('blogContent.section3.option1.con1')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">❌</span>
                      <span className="text-slate-600 font-light font-['Poppins']">{t('blogContent.section3.option1.con2')}</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3">{t('blogContent.section3.option2.title')}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-lg">✔️</span>
                      <span className="text-slate-600 font-light font-['Poppins']">{t('blogContent.section3.option2.pro')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">❌</span>
                      <span className="text-slate-600 font-light font-['Poppins']">{t('blogContent.section3.option2.con')}</span>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-green-700 rounded-lg p-6 bg-green-50">
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3">{t('blogContent.section3.option3.title')}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-lg">✔️</span>
                      <span className="text-slate-600 font-light font-['Poppins']">{t('blogContent.section3.option3.pro1')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-lg">✔️</span>
                      <span className="text-slate-600 font-light font-['Poppins']">{t('blogContent.section3.option3.pro2')}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-lg">✔️</span>
                      <span className="text-slate-600 font-light font-['Poppins']">{t('blogContent.section3.option3.pro3')}</span>
                    </div>
                  </div>
                  <p className="text-green-700 font-medium font-['Poppins']">
                    {t('blogContent.section3.option3.cta')}
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                {t('blogContent.section4.title')}
              </h2>
              <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                {t('blogContent.section4.description')}
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section4.research').split(' – ')[0]}</strong> – {t('blogContent.section4.research').split(' – ')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section4.condition').split(' – ')[0]}</strong> – {t('blogContent.section4.condition').split(' – ')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section4.negotiation').split(' – ')[0]}</strong> – {t('blogContent.section4.negotiation').split(' – ')[1]}
                  </span>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-medium font-['Poppins']">
                  {t('blogContent.section4.cta')}
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                {t('blogContent.section5.title')}
              </h2>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section5.mistake1').split(' – ')[0]}</strong> – {t('blogContent.section5.mistake1').split(' – ')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section5.mistake2').split(' – ')[0]}</strong> – {t('blogContent.section5.mistake2').split(' – ')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section5.mistake3').split(' – ')[0]}</strong> – {t('blogContent.section5.mistake3').split(' – ')[1]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>{t('blogContent.section5.mistake4').split(' – ')[0]}</strong> – {t('blogContent.section5.mistake4').split(' – ')[1]}
                  </span>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-medium font-['Poppins']">
                  {t('blogContent.section5.cta')}
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-green-700 to-green-600 rounded-xl p-8 text-white">
              <h2 className="text-white text-2xl font-bold font-['Barlow'] mb-4">
                {t('blogContent.cta.title')}
              </h2>
              <p className="text-green-100 font-light font-['Poppins'] leading-relaxed mb-6">
                {t('blogContent.cta.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-white text-lg">✅</span>
                    <span className="text-green-100 font-light font-['Poppins']">{t('blogContent.cta.benefit1')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white text-lg">✅</span>
                    <span className="text-green-100 font-light font-['Poppins']">{t('blogContent.cta.benefit2')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white text-lg">✅</span>
                    <span className="text-green-100 font-light font-['Poppins']">{t('blogContent.cta.benefit3')}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-white text-lg">✅</span>
                    <span className="text-green-100 font-light font-['Poppins']">{t('blogContent.cta.benefit4')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white text-lg">✅</span>
                    <span className="text-green-100 font-light font-['Poppins']">{t('blogContent.cta.benefit5')}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-white text-xl font-semibold font-['Poppins'] mb-4">{t('blogContent.cta.whyChooseTitle')}</h3>
                <div className="space-y-2">
                  <p className="text-green-100 font-light font-['Poppins']">{t('blogContent.cta.reason1')}</p>
                  <p className="text-green-100 font-light font-['Poppins']">{t('blogContent.cta.reason2')}</p>
                  <p className="text-green-100 font-light font-['Poppins']">{t('blogContent.cta.reason3')}</p>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="/get-started"
                  className="inline-block px-8 py-3 bg-white text-green-700 font-medium font-['Poppins'] rounded-full hover:bg-gray-100 transition-colors"
                >
                  {t('blogContent.cta.contactButton')}
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}