
export default function ReviewsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="px-6 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Reviews Section */}
          <div className="text-center pt-16 sm:pt-24">
            <div className="w-72 text-center justify-start text-green-700 text-5xl font-extrabold font-['Barlow'] leading-10 mb-8 sm:mb-12 mx-auto">
              What they say about us!
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {/* Review Card 1 */}
            <div className="w-80 p-6 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex justify-start items-start gap-6">
              <div className="w-16 h-24 bg-green-700 rounded-[10px]" />
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
                <div className="w-48 justify-start text-slate-600 text-base font-normal font-['Poppins'] leading-tight">
                  &quot;Amazing service and incredibly fast process. Sold my car in just 2 days with no hassle.&quot;
                </div>
                <div className="w-40 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch opacity-30 justify-start text-black text-base font-bold font-['Poppins'] uppercase leading-relaxed tracking-[3px]">Sarah Johnson</div>
                </div>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="w-80 p-6 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex justify-start items-start gap-6">
              <div className="w-16 h-24 bg-blue-600 rounded-[10px]" />
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
                <div className="w-48 justify-start text-slate-600 text-base font-normal font-['Poppins'] leading-tight">
                  &quot;Professional team and transparent pricing. They handled all the paperwork perfectly.&quot;
                </div>
                <div className="w-40 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch opacity-30 justify-start text-black text-base font-bold font-['Poppins'] uppercase leading-relaxed tracking-[3px]">Michael Chen</div>
                </div>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="w-80 p-6 bg-white rounded-[10px] outline outline-2 outline-offset-[-2px] outline-green-700 inline-flex justify-start items-start gap-6">
              <div className="w-16 h-24 bg-amber-500 rounded-[10px]" />
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
                <div className="w-48 justify-start text-slate-600 text-base font-normal font-['Poppins'] leading-tight">
                  &quot;Got the best price for my car. The online valuation was accurate and pickup was convenient.&quot;
                </div>
                <div className="w-40 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch opacity-30 justify-start text-black text-base font-bold font-['Poppins'] uppercase leading-relaxed tracking-[3px]">Emma Davis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
