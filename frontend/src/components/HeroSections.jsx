// components/HeroSection.js
import React from "react";

const HeroSection = () => {
  const features = [
    { text: "Free Shipping", icon: "🚚" },
    { text: "Secure Payments", icon: "🔒" },
    { text: "30-Day Returns", icon: "↩️" },
    { text: "24/7 Support", icon: "💬" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full">
              <span className="text-pink-600 text-sm font-semibold">✨ New Season Arrivals</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Discover Your 
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Perfect Style
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore our curated collection of premium fashion for every occasion. 
              Quality meets affordability with our handpicked selection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Shop Now →
              </button>
              <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
                Explore Collection
              </button>
            </div>

            {/* Trust Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-xl">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop"
              alt="Fashion Hero"
              className="relative rounded-2xl shadow-2xl object-cover w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="font-bold text-gray-800">TrustScore 4.8</div>
                  <div className="text-xs text-gray-500">10k+ Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;