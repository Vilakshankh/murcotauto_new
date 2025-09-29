import React from 'react';
import Link from 'next/link';

export default function RecentPosts() {
  const recentPosts = [
    {
      id: 'montreal-car-selling',
      title: "Top Tips for Selling Your Car Quickly in Montreal",
      excerpt: "Are you looking to sell your car quickly in Montreal? Whether you're upgrading to a newer model or simply need to let go of your current vehicle, there are several tips and tricks you can follow to ensure a smooth and speedy sale.",
      date: "Mar 15, 2024",
      readTime: "2 min read"
    },
    {
      id: 'quebec-car-market',
      title: "Expert Car Buying and Selling Tips in Quebec",
      excerpt: "Are you looking for expert car buying and selling tips in Quebec? Look no further! Murcot Auto Inc. is a reputable local auto brokerage business located in Montreal, Quebec.",
      date: "Mar 15, 2024",
      readTime: "2 min read"
    },
    {
      id: 'auto-brokers-guide',
      title: "Smooth Car Buying Process with Montreal Auto Brokers",
      excerpt: "Are you looking to buy or sell a car in Montreal, Quebec? Look no further than Murcot Auto Inc., a trusted local auto brokerage business that has been serving clients since 1993.",
      date: "Mar 15, 2024",
      readTime: "2 min read"
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold font-['Barlow'] mb-4">
            Recent Posts
          </h2>
          <p className="text-slate-600 text-lg font-light font-['Poppins'] max-w-2xl mx-auto">
            Stay up to date with the latest car selling tips, market insights, and industry news.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center text-green-700 text-sm font-medium font-['Poppins'] mb-3">
                  {post.date} • {post.readTime}
                </div>
                <h3 className="text-slate-900 text-xl font-semibold font-['Poppins'] mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 font-light font-['Poppins'] leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-green-700 font-medium font-['Poppins'] hover:text-green-600 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See All Posts Button */}
        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-block px-8 py-3 bg-green-700 text-white font-medium font-['Poppins'] rounded-lg hover:bg-green-600 transition-colors"
          >
            See All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
