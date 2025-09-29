import React from 'react';

export default function BlogHero() {
  return (
    <div className="w-full bg-green-700 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold font-['Barlow'] mb-4">
          Murcot Auto Blog
        </h1>
        <p className="text-gray-200 text-lg font-light font-['Poppins'] max-w-2xl mx-auto">
          Expert tips, industry insights, and helpful guides for selling your car with ease and confidence.
        </p>
      </div>
    </div>
  );
}
