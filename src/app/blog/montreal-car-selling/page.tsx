import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import RecentPosts from '@/components/RecentPosts';

export default function MontrealCarSelling() {
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
              Top Tips for Selling Your Car Quickly in Montreal
            </h1>
            <p className="text-slate-600 text-lg font-light font-['Poppins'] leading-relaxed">
              Are you looking to sell your car quickly in Montreal? Whether you&apos;re upgrading to a newer model or simply need to let go of your current vehicle, there are several tips and tricks you can follow to ensure a smooth and speedy sale.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              
              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  Clean and Showcase Your Car
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  Before listing your car for sale, make sure to thoroughly clean both the interior and exterior. First impressions matter, and a clean car will attract more potential buyers. Take high-quality photos highlighting the best features of your vehicle to grab the attention of interested buyers.
                </p>
              </section>

              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  Set a Competitive Price
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  Research the market value of your car and set a competitive price. Pricing your car too high can scare off potential buyers, while pricing it too low can make buyers suspicious. Websites and tools are available to help you determine the right price for your vehicle based on its make, model, year, and condition.
                </p>
              </section>

              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  Create a Detailed Listing
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  When creating your online listing, be sure to include all relevant information about your car, such as its make, model, year, mileage, and any special features. Highlighting the vehicle's history, maintenance records, and any recent upgrades can also help attract serious buyers.
                </p>
              </section>

              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  Utilize Online Platforms
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  Take advantage of popular online platforms and classified websites to reach a larger audience of potential buyers. Websites and social media channels dedicated to buying and selling cars are great places to list your vehicle and connect with interested buyers in Montreal.
                </p>
              </section>

              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  Consider a Local Auto Brokerage
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  If you&apos;re looking for a hassle-free selling experience, consider reaching out to a local auto brokerage like Murcot Auto Inc. to assist with the sale of your car. Auto brokers have the expertise and resources to market your vehicle effectively, negotiate with buyers on your behalf, and handle all the paperwork involved in the sales process.
                </p>
              </section>

              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  Be Transparent and Responsive
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-6">
                  When engaging with potential buyers, be transparent about the condition of your car and be responsive to inquiries and viewing requests. Providing accurate information and promptly addressing buyer's questions can help build trust and expedite the selling process.
                </p>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  By following these top tips for selling your car quickly in Montreal, you can increase your chances of finding a buyer and completing a successful sale. Whether you choose to sell your car independently or seek the assistance of a local auto brokerage, the key is to stay proactive, organized, and customer-focused throughout the selling journey.
                </p>
              </section>

              <section className="bg-gradient-to-r from-green-700 to-green-600 rounded-xl p-8 text-white">
                <h2 className="text-white text-2xl font-bold font-['Barlow'] mb-4">
                  Ready to Sell Your Car in Montreal?
                </h2>
                <p className="text-green-100 font-light font-['Poppins'] leading-relaxed mb-6">
                  Let Murcot Auto Inc. handle everything for you. With over 30 years of experience, we make selling your car quick and hassle-free.
                </p>
                <div className="text-center">
                  <a 
                    href="/get-started"
                    className="inline-block px-8 py-3 bg-white text-green-700 font-medium font-['Poppins'] rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Get Your Free Quote Now
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
