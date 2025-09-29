import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import RecentPosts from '@/components/RecentPosts';

export default function QuebecCarMarket() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-2">
              Murcot Auto • Mar 15 • 2 min read
            </div>
            <h1 className="text-slate-900 text-3xl md:text-4xl font-bold font-['Barlow'] mb-4">
              Expert Car Buying and Selling Tips in Quebec
            </h1>
            <p className="text-slate-600 text-lg font-light font-['Poppins'] leading-relaxed">
              Are you looking for expert car buying and selling tips in Quebec? Look no further! Murcot Auto Inc. is a reputable local auto brokerage business located in Montreal, Quebec, with over 25 years of experience in the industry.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              
              <section>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-6">
                  With a proven track record of buying and selling thousands of cars, Murcot Auto Inc. offers personalized service and expert guidance to make the car buying and selling process seamless and stress-free for their clients. Whether you are in the market to buy a new vehicle or looking to sell your current car, Murcot Auto Inc. is here to help every step of the way.
                </p>
              </section>

              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  Selling Your Vehicle
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  For those looking to sell their vehicles, Murcot Auto Inc. operates a user-friendly landing page that highlights competitive pricing, convenient at-home pick-ups, and an easy car-selling process. Their brokerage services aim to facilitate the sale of vehicles quickly and efficiently, allowing customers to get the best value for their cars without the hassle of dealing with multiple buyers.
                </p>
              </section>

              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  Expert Car Buying Assistance
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  When it comes to buying a car, Murcot Auto Inc.'s team of experts can provide valuable insights and guidance to help you find the perfect vehicle to suit your needs and budget. From conducting thorough market research to negotiating the best deal on your behalf, Murcot Auto Inc. is dedicated to ensuring that you drive away with a car that meets all your requirements.
                </p>
              </section>

              <section>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  So whether you are in the market to buy or sell a car in Quebec, trust Murcot Auto Inc. to provide you with the expert advice and top-notch service you deserve. Contact them today to learn more about how they can help you with all your car buying and selling needs.
                </p>
              </section>

              <section className="bg-gradient-to-r from-green-700 to-green-600 rounded-xl p-8 text-white">
                <h2 className="text-white text-2xl font-bold font-['Barlow'] mb-4">
                  25+ Years of Quebec Automotive Excellence
                </h2>
                <p className="text-green-100 font-light font-['Poppins'] leading-relaxed mb-6">
                  With thousands of successful transactions and deep knowledge of Quebec's market, Murcot Auto Inc. is your trusted partner for all car buying and selling needs.
                </p>
                <div className="text-center">
                  <a 
                    href="/get-started"
                    className="inline-block px-8 py-3 bg-white text-green-700 font-medium font-['Poppins'] rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Get Expert Help Today
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <RecentPosts />
      <FooterSection />
    </div>
  );
}
