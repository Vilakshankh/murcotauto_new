
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ReviewsSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-white pb-16">
      <div className="px-6 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Reviews Section */}
          <div className="text-center pt-16 sm:pt-24">
            <div className="w-72 text-center justify-start text-green-700 text-5xl font-extrabold font-['Barlow'] leading-10 mb-8 sm:mb-12 mx-auto">
              {t('reviews.title')}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {/* Review Card 1 */}
            <div className="w-80 p-6 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex justify-start items-start gap-6">
              <div className="w-24 h-24 bg-green-700 rounded-[10px] flex items-center justify-center">
                <span className="text-white text-xl font-bold font-['Poppins']">MA</span>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
                <div className="w-48 justify-start text-slate-600 text-base font-normal font-['Poppins'] leading-tight">
                  &quot;What an amazing experience with Murcot Auto. They beat every other offer on my car and made the transaction super easy. No fuss no low balls just professional business. Would 100% deal with them again. Excellent communication from Evan he was very patient while I was looking for my new car.&quot;
                </div>
                <div className="w-40 flex flex-col justify-start items-start gap-2.5">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <div className="self-stretch opacity-30 justify-start text-black text-base font-bold font-['Poppins'] uppercase leading-relaxed tracking-[3px]">Muzammil Akber</div>
                </div>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="w-80 p-6 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex justify-start items-start gap-6">
              <div className="w-24 h-24 bg-blue-600 rounded-[10px] flex items-center justify-center">
                <span className="text-white text-2xl font-bold font-['Poppins']">V</span>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
                <div className="w-48 justify-start text-slate-600 text-base font-normal font-['Poppins'] leading-tight">
                  &quot;5 stars! I got a very good price for my car! They drove all the way to my place and picked up my car. Easy, quick, efficient and professional. They even drove me to my bank to cash the cheque! Very nice experience. 10/10 would recommend.&quot;
                </div>
                <div className="w-40 flex flex-col justify-start items-start gap-2.5">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <div className="self-stretch opacity-30 justify-start text-black text-base font-bold font-['Poppins'] uppercase leading-relaxed tracking-[3px]">Vern</div>
                </div>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="w-80 p-6 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex justify-start items-start gap-6">
              <div className="w-24 h-24 bg-amber-500 rounded-[10px] flex items-center justify-center">
                <span className="text-white text-xl font-bold font-['Poppins']">PM</span>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
                <div className="w-48 justify-start text-slate-600 text-base font-normal font-['Poppins'] leading-tight">
                  &quot;If you want an easy transaction, great service and quick responses Murcot Auto is the best around. Evan and his dad were excellent to work with. Very fair price for my vehicle, collection was seamless and couldn&apos;t ask for a better service.&quot;
                </div>
                <div className="w-40 flex flex-col justify-start items-start gap-2.5">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <div className="self-stretch opacity-30 justify-start text-black text-base font-bold font-['Poppins'] uppercase leading-relaxed tracking-[3px]">Peter Mok</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* View More Reviews Button */}
          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/search?sca_esv=b6b0734220a77ce1&sxsrf=AE3TifNH1b5Njk655XAqx7aY9CkbCQLX-A:1759078864998&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s6rE5Ubm5utOn42OJsoehS7Rt0_dRzZVB85qs194aux8gLUo8V3iIn0-_M3hMyy8lh-7CiUjedFZB--yRC73F4pudqZV&q=Murcot+Auto+Reviews&sa=X&ved=2ahUKEwjc_IS39_uPAxWlDjQIHff_GaUQ0bkNegQIKRAD&biw=1470&bih=835&dpr=2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white rounded-[57.83px] flex justify-center items-center gap-2.5 outline outline-2 outline-green-700 hover:bg-green-50 transition-colors inline-flex"
            >
              <div className="text-center justify-center text-green-700 text-xl font-medium font-['Poppins'] leading-relaxed">
                {t('reviews.viewMore')}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

