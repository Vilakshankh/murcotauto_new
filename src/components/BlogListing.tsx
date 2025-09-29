import React from 'react';
import Link from 'next/link';

export default function BlogListing() {
  const featuredArticle = {
    id: 'selling-car-tips',
    title: "How to Sell Your Car Fast and Get the Best Price",
    excerpt: "Selling your car doesn't have to be stressful. Whether you want to sell online, trade it in, or find a buyer fast, the right approach will help you get top dollar with zero hassle.",
    date: "Mar 15, 2024",
    readTime: "3 min read",
    featured: true,
    image: "/whysellpic.png"
  };

  const blogArticles = [
    {
      id: 'montreal-car-selling',
      title: "Top Tips for Selling Your Car Quickly in Montreal",
      excerpt: "Are you looking to sell your car quickly in Montreal? Whether you're upgrading to a newer model or simply need to let go of your current vehicle, there are several tips and tricks you can follow to ensure a smooth and speedy sale.",
      date: "Mar 15, 2024",
      readTime: "2 min read",
      image: "/map.png"
    },
    {
      id: 'quebec-car-market',
      title: "Expert Car Buying and Selling Tips in Quebec",
      excerpt: "Are you looking for expert car buying and selling tips in Quebec? Look no further! Murcot Auto Inc. is a reputable local auto brokerage business located in Montreal, Quebec, with over 25 years of experience in the industry.",
      date: "Mar 15, 2024",
      readTime: "2 min read",
      image: "/efficient-v2.png"
    },
    {
      id: 'auto-brokers-guide',
      title: "Smooth Car Buying Process with Montreal Auto Brokers",
      excerpt: "Are you looking to buy or sell a car in Montreal, Quebec? Look no further than Murcot Auto Inc., a trusted local auto brokerage business that has been serving clients since 1993.",
      date: "Mar 15, 2024",
      readTime: "2 min read",
      image: "/hasslefree-v2.svg"
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs mr-3">FEATURED</span>
                  Murcot Auto • {featuredArticle.date} • {featuredArticle.readTime}
                </div>
                <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Barlow'] mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-600 text-lg font-light font-['Poppins'] leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <Link 
                  href={`/blog/${featuredArticle.id}`}
                  className="inline-flex items-center px-6 py-3 bg-green-700 text-white font-medium font-['Poppins'] rounded-lg hover:bg-green-600 transition-colors"
                >
                  Read Full Article →
                </Link>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
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
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg font-['Poppins'] text-sm focus:ring-2 focus:ring-green-700 focus:border-green-700 outline-none">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Oldest First</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-green-200">
              <div className="relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-xs font-medium">FEATURED</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-3">
                  {featuredArticle.date} • {featuredArticle.readTime}
                </div>
                <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3 leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
                <Link 
                  href={`/blog/${featuredArticle.id}`}
                  className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>

            {/* Regular Articles */}
            {blogArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-3">
                    {article.date} • {article.readTime}
                  </div>
                  <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${article.id}`}
                    className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-8 text-center">
          <h3 className="text-white text-2xl font-bold font-['Barlow'] mb-4">
            Stay Updated with Car Selling Tips
          </h3>
          <p className="text-green-100 font-light font-['Poppins'] mb-6 max-w-2xl mx-auto">
            Get the latest articles, market insights, and expert tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg font-['Poppins'] focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-green-700 font-medium font-['Poppins'] rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
