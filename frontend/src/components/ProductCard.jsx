// components/ProductCard.js
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = Math.floor(Math.random() * (40 - 10 + 1) + 10);
  const originalPrice = parseInt(product.price.replace(/[^0-9]/g, ""));
  const offerPrice = Math.floor(originalPrice * (1 - discountPercentage / 100));
  
  const formattedOfferPrice = `₹${offerPrice.toLocaleString("en-IN")}`;
  const formattedOriginalPrice = `₹${originalPrice.toLocaleString("en-IN")}`;

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.img}
          alt={product.name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-md text-xs font-bold shadow-md">
          {discountPercentage}% OFF
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-pink-50 transition-colors">
          <svg className="w-4 h-4 text-gray-600 hover:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Quick View Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium text-sm hover:bg-pink-600 hover:text-white transition-colors">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-pink-600 font-semibold bg-pink-50 px-2 py-1 rounded">
            {product.category || "Trending"}
          </span>
        </div>
        
        <h4 className="font-semibold text-gray-800 text-lg mb-1 line-clamp-1">
          {product.name}
        </h4>
        
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">
          {product.description || "Premium quality fabric with comfortable fit"}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-pink-600">
            {formattedOfferPrice}
          </span>
          <span className="text-gray-400 line-through text-sm">
            {formattedOriginalPrice}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-500 text-xs">(128 reviews)</span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-2.5 rounded-lg font-semibold hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105 shadow-md">
          Add to Cart
        </button>

        {/* Delivery Info */}
        <div className="mt-3 text-xs text-gray-500 flex items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Free Delivery
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            7 Days Return
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;