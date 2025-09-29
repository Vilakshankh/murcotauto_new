import React from 'react';
import Link from 'next/link';

export default function BlogContent() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-2">
            Murcot Auto • Mar 15 • 3 min read
          </div>
          <h1 className="text-slate-900 text-3xl md:text-4xl font-bold font-['Barlow'] mb-4">
            5 Essential Tips for Selling Your Car Fast
          </h1>
          <p className="text-slate-600 text-lg font-light font-['Poppins'] leading-relaxed">
            Selling your car doesn&apos;t have to be stressful. Whether you want to sell online, trade it in, or find a buyer fast, the right approach will help you get top dollar with zero hassle.
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                1. Know Your Car's Value Before Selling
              </h2>
              <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                Before listing your car for sale, it&apos;s important to understand how much it&apos;s worth. Your car's trade-in price is based on:
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Make and model</strong> – Some brands hold their value better than others.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Age and mileage</strong> – Low-mileage cars typically sell for more.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Condition</strong> – Scratches, dents, and mechanical issues affect the valuation.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Market demand</strong> – Popular models sell faster and for a higher price.
                  </span>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-medium font-['Poppins']">
                  🔹 Use our Free Car Valuation Tool to get an instant quote!
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                2. Prepare Your Car for Sale
              </h2>
              <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                First impressions matter. A well-maintained car is more attractive to buyers. Here's how to get it ready:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Clean your car inside and out</strong> – A dirty car can lower its perceived value.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Fix minor repairs</strong> – Small improvements like replacing wipers or fixing small dents can help.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Gather paperwork</strong> – Have ownership papers, service records, and extra keys ready.
                  </span>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                3. Choose the Best Way to Sell Your Car
              </h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3">Option 1: Private Sale</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-lg">✔️</span>
                      <span className="text-slate-600 font-light font-['Poppins']">Higher selling price</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">❌</span>
                      <span className="text-slate-600 font-light font-['Poppins']">Time-consuming – You'll need to advertise, respond to inquiries, and meet buyers.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">❌</span>
                      <span className="text-slate-600 font-light font-['Poppins']">Risk of scams – Some buyers may not be serious or may attempt fraud.</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3">Option 2: Trade-In at a Dealership</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-lg">✔️</span>
                      <span className="text-slate-600 font-light font-['Poppins']">Quick & easy if buying another car</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">❌</span>
                      <span className="text-slate-600 font-light font-['Poppins']">Lower offers – Dealerships resell for profit.</span>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-green-700 rounded-lg p-6 bg-green-50">
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3">Option 3: Sell to a Professional Car Buyer (Best for Fast Sales!)</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-lg">✔️</span>
                      <span className="text-slate-600 font-light font-['Poppins']">Fast & hassle-free – No need for advertising or meeting with buyers.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-lg">✔️</span>
                      <span className="text-slate-600 font-light font-['Poppins']">Instant payment – Get paid on the spot.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 text-lg">✔️</span>
                      <span className="text-slate-600 font-light font-['Poppins']">Fair & competitive offers – No haggling, no stress.</span>
                    </div>
                  </div>
                  <p className="text-green-700 font-medium font-['Poppins']">
                    🔹 Get a Free Quote Now
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                4. Set the Right Price
              </h2>
              <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                If selling privately, pricing is crucial. To determine a fair price:
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Research similar listings</strong> – Check online marketplaces.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Consider condition & mileage</strong> – Well-maintained cars can be priced higher.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-700 text-lg">✔️</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Leave room for negotiation</strong> – Set your price slightly higher to allow for bargaining.
                  </span>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-medium font-['Poppins']">
                  💡 Want to avoid pricing guesswork? Sell to Murcot Auto Inc. for a fair, transparent offer!
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-slate-900 text-2xl font-bold font-['Barlow'] mb-4">
                5. Avoid These Common Mistakes When Selling Your Car
              </h2>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Not knowing your car's value</strong> – Always research before accepting an offer.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Neglecting maintenance</strong> – A poorly maintained car reduces your offer.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Falling for scams</strong> – Be cautious of fake buyers and fraudulent payments.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">❌</span>
                  <span className="text-slate-600 font-light font-['Poppins']">
                    <strong>Waiting too long</strong> – Your car's value depreciates over time.
                  </span>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-medium font-['Poppins']">
                  🔹 Get an Instant Offer Today!
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-green-700 to-green-600 rounded-xl p-8 text-white">
              <h2 className="text-white text-2xl font-bold font-['Barlow'] mb-4">
                Sell Your Car Fast with Murcot Auto Inc.
              </h2>
              <p className="text-green-100 font-light font-['Poppins'] leading-relaxed mb-6">
                Looking for the easiest way to sell your car fast? Sell with Murcot Auto Inc. and enjoy a simple, stress-free process:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-white text-lg">✅</span>
                    <span className="text-green-100 font-light font-['Poppins']">Free car valuation – Know your trade-in price upfront.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white text-lg">✅</span>
                    <span className="text-green-100 font-light font-['Poppins']">No hidden fees – What we offer is what you get.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white text-lg">✅</span>
                    <span className="text-green-100 font-light font-['Poppins']">Sell from home – No need to visit a dealership.</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-white text-lg">✅</span>
                    <span className="text-green-100 font-light font-['Poppins']">Instant payment – Get paid on the spot.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-white text-lg">✅</span>
                    <span className="text-green-100 font-light font-['Poppins']">Serving Montreal & beyond – We buy within a 400 km radius for both the local market and export to the USA.</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-white text-xl font-semibold font-['Poppins'] mb-4">Why Choose Murcot Auto Inc.?</h3>
                <div className="space-y-2">
                  <p className="text-green-100 font-light font-['Poppins']">🚗 <strong>Trusted since 1993</strong> – Over 30 years in the automotive industry.</p>
                  <p className="text-green-100 font-light font-['Poppins']">🚗 <strong>Hassle-free process</strong> – We handle everything.</p>
                  <p className="text-green-100 font-light font-['Poppins']">🚗 <strong>Competitive cash offers</strong> – Get the best price for your car, fast!</p>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="/get-started"
                  className="inline-block px-8 py-3 bg-white text-green-700 font-medium font-['Poppins'] rounded-full hover:bg-gray-100 transition-colors"
                >
                  📞 Contact us today for a free evaluation!
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
