import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import RecentPosts from '@/components/RecentPosts';

export default function AutoBrokersGuide() {
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
              Smooth Car Buying Process with Montreal Auto Brokers
            </h1>
            <p className="text-slate-600 text-lg font-light font-['Poppins'] leading-relaxed">
              Are you looking to buy or sell a car in Montreal, Quebec? Look no further than Murcot Auto Inc., a trusted local auto brokerage business that has been serving clients since 1993.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              
              <section>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  With a strong reputation for personalized service and expert guidance, Murcot Auto Inc. ensures a smooth and hassle-free car buying process for all its customers.
                </p>
              </section>

              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  Personalized Service from Start to Finish
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  One of the key benefits of choosing Murcot Auto Inc. for your car buying needs is their focus on providing a seamless experience from start to finish. Their team of experienced brokers will work closely with you to understand your requirements and preferences, ensuring that they find the perfect vehicle to suit your needs. Whether you're looking for a compact car for city driving or a spacious SUV for family trips, Murcot Auto Inc. has you covered.
                </p>
              </section>

              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  User-Friendly Online Platform
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  In addition to their personalized service, Murcot Auto Inc. also operates a user-friendly website that serves as a landing page for marketing their services. The website highlights competitive pricing, convenient at-home pick-ups, and an easy car-selling process for customers looking to sell their vehicles. This online platform provides a wealth of information for both buyers and sellers, making it easy to navigate the car buying and selling process with confidence.
                </p>
              </section>

              <section>
                <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                  Your Dream Car is Just a Phone Call Away
                </h2>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  When you choose Murcot Auto Inc. as your auto brokerage business, you can rest assured that you're in good hands. With their years of experience and dedication to customer satisfaction, they will go above and beyond to ensure that you have a positive and successful car buying experience. Say goodbye to the stress and uncertainty of traditional car shopping – with Murcot Auto Inc., your dream car is just a phone call away.
                </p>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  So whether you're in the market for a new vehicle or looking to sell your current car, trust Murcot Auto Inc. to make the process smooth, convenient, and hassle-free. Contact them today to learn more about their services and see how they can help you find the perfect car for your needs.
                </p>
              </section>

              <section className="bg-gradient-to-r from-green-700 to-green-600 rounded-xl p-8 text-white">
                <h2 className="text-white text-2xl font-bold font-['Barlow'] mb-4">
                  Trusted Montreal Auto Brokerage Since 1993
                </h2>
                <p className="text-green-100 font-light font-['Poppins'] leading-relaxed mb-6">
                  With decades of experience and a commitment to customer satisfaction, Murcot Auto Inc. makes car buying and selling smooth, convenient, and hassle-free.
                </p>
                <div className="text-center">
                  <a 
                    href="/get-started"
                    className="inline-block px-8 py-3 bg-white text-green-700 font-medium font-['Poppins'] rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Contact Us Today
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
