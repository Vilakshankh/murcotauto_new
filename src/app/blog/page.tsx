'use client';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import BlogHero from '@/components/BlogHero';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Blog() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <BlogHero />

      {/* Blog Content */}
      <div className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-4">
                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs mr-3">{t('blog.featured')}</span>
                    Murcot Auto • Mar 15 • 3 min read
                  </div>
                  <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Barlow'] mb-4 leading-tight">
                    {t('blogContent.title')}
                  </h2>
                  <p className="text-slate-600 text-lg font-light font-['Poppins'] leading-relaxed mb-6">
                    {t('blogContent.subtitle')}
                  </p>
                  <Link 
                    href="/blog/selling-car-tips"
                    className="inline-flex items-center px-6 py-3 bg-green-700 text-white font-medium font-['Poppins'] rounded-lg hover:bg-green-600 transition-colors"
                  >
                    {t('blog.readFullArticle')}
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <img 
                    src="/whysellpic.png" 
                    alt="How to Sell Your Car Fast and Get the Best Price"
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* All Articles Grid */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-slate-900 text-3xl font-bold font-['Barlow']">
                {t('blog.allArticles')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Article Card */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-green-200">
                <div className="relative">
                  <img 
                    src="/whysellpic.png" 
                    alt="How to Sell Your Car Fast and Get the Best Price"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-medium">{t('blog.featured')}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-3">
                    Mar 15 • 3 min read
                  </div>
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3 leading-tight">
                    {t('blogContent.title')}
                  </h3>
                  <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4 line-clamp-3">
                    {t('blogContent.subtitle')}
                  </p>
                  <Link 
                    href="/blog/selling-car-tips"
                    className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                  >
                    {t('blog.readMore')}
                  </Link>
                </div>
              </div>

              {/* Montreal Article */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border">
                <div className="relative">
                  <img 
                    src="/map.png" 
                    alt="Top Tips for Selling Your Car Quickly in Montreal"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-3">
                    Mar 15 • 2 min read
                  </div>
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3 leading-tight">
                    {t('blogArticle.montreal.title')}
                  </h3>
                  <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4 line-clamp-3">
                    {t('blogArticle.montreal.description')}
                  </p>
                  <Link 
                    href="/blog/montreal-car-selling"
                    className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                  >
                    {t('blog.readMore')}
                  </Link>
                </div>
              </div>

              {/* Quebec Article */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border">
                <div className="relative">
                  <img 
                    src="/efficient-v2.png" 
                    alt="Expert Car Buying and Selling Tips in Quebec"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-3">
                    Mar 15 • 2 min read
                  </div>
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3 leading-tight">
                    {t('blogArticle.quebec.title')}
                  </h3>
                  <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4 line-clamp-3">
                    {t('blogArticle.quebec.description')}
                  </p>
                  <Link 
                    href="/blog/quebec-car-market"
                    className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                  >
                    {t('blog.readMore')}
                  </Link>
                </div>
              </div>

              {/* Auto Brokers Article */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border">
                <div className="relative">
                  <img 
                    src="/hasslefree-v2.svg" 
                    alt="Smooth Car Buying Process with Montreal Auto Brokers"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-3">
                    Mar 15 • 2 min read
                  </div>
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3 leading-tight">
                    {t('blogArticle.brokers.title')}
                  </h3>
                  <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4 line-clamp-3">
                    {t('blogArticle.brokers.description')}
                  </p>
                  <Link 
                    href="/blog/auto-brokers-guide"
                    className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                  >
                    {t('blog.readMore')}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
      
      <FooterSection />
    </div>
  );
}
