import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      
      {/* Blog Hero */}
      <div className="w-full bg-green-700 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Barlow'] mb-4">
            Murcot Auto Blog
          </h1>
          <p className="text-gray-200 text-lg font-light font-['Poppins'] max-w-2xl mx-auto">
            Expert tips, industry insights, and helpful guides for selling your car with ease and confidence.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-4">
                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs mr-3">FEATURED</span>
                    Murcot Auto • Mar 15 • 3 min read
                  </div>
                  <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Barlow'] mb-4 leading-tight">
                    How to Sell Your Car Fast and Get the Best Price
                  </h2>
                  <p className="text-slate-600 text-lg font-light font-['Poppins'] leading-relaxed mb-6">
                    Selling your car doesn&apos;t have to be stressful. Whether you want to sell online, trade it in, or find a buyer fast, the right approach will help you get top dollar with zero hassle.
                  </p>
                  <Link 
                    href="/blog/selling-car-tips"
                    className="inline-flex items-center px-6 py-3 bg-green-700 text-white font-medium font-['Poppins'] rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Read Full Article →
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
                All Articles
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
                    <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-medium">FEATURED</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-3">
                    Mar 15 • 3 min read
                  </div>
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3 leading-tight">
                    How to Sell Your Car Fast and Get the Best Price
                  </h3>
                  <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4 line-clamp-3">
                    Selling your car doesn&apos;t have to be stressful. Whether you want to sell online, trade it in, or find a buyer fast, the right approach will help you get top dollar with zero hassle.
                  </p>
                  <Link 
                    href="/blog/selling-car-tips"
                    className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                  >
                    Read More →
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
                    Top Tips for Selling Your Car Quickly in Montreal
                  </h3>
                  <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4 line-clamp-3">
                    Are you looking to sell your car quickly in Montreal? Whether you&apos;re upgrading to a newer model or simply need to let go of your current vehicle, there are several tips and tricks you can follow to ensure a smooth and speedy sale.
                  </p>
                  <Link 
                    href="/blog/montreal-car-selling"
                    className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                  >
                    Read More →
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
                    Expert Car Buying and Selling Tips in Quebec
                  </h3>
                  <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4 line-clamp-3">
                    Are you looking for expert car buying and selling tips in Quebec? Look no further! Murcot Auto Inc. is a reputable local auto brokerage business located in Montreal, Quebec, with over 25 years of experience in the industry.
                  </p>
                  <Link 
                    href="/blog/quebec-car-market"
                    className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                  >
                    Read More →
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
                    Smooth Car Buying Process with Montreal Auto Brokers
                  </h3>
                  <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4 line-clamp-3">
                    Are you looking to buy or sell a car in Montreal, Quebec? Look no further than Murcot Auto Inc., a trusted local auto brokerage business that has been serving clients since 1993.
                  </p>
                  <Link 
                    href="/blog/auto-brokers-guide"
                    className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                  >
                    Read More →
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
