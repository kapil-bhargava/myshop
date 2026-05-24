import CategoryUser from "../components/CategoryUser";
import HeroSection from "../components/HeroSections";
import ProductCard from "../components/ProductCard";

// components/Home.js
const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: "₹499",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    category: "Men's Fashion",
    description: "100% combed cotton, breathable fabric for all-day comfort",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: "₹1,299",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&h=500&fit=crop",
    category: "Outerwear",
    description: "Premium quality denim with distressed finish",
  },
  {
    id: 3,
    name: "Ethnic Kurta Set",
    price: "₹899",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
    category: "Ethnic Wear",
    description: "Handcrafted kurta with intricate embroidery",
  },
  {
    id: 4,
    name: "Floral Maxi Dress",
    price: "₹1,499",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
    category: "Women's Fashion",
    description: "Elegant floral print with flowy silhouette",
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    price: "₹999",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
    category: "Bottom Wear",
    description: "Stretchable denim with perfect fit",
  },
  {
    id: 6,
    name: "Wool Blend Sweater",
    price: "₹1,199",
    img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop",
    category: "Winter Wear",
    description: "Soft and warm, perfect for cold weather",
  },
  {
    id: 7,
    name: "Leather Belt",
    price: "₹399",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
    category: "Accessories",
    description: "Genuine leather with premium buckle",
  },
  {
    id: 8,
    name: "Sports Shoes",
    price: "₹1,999",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop",
    category: "Footwear",
    description: "Lightweight and cushioned for all-day comfort",
  },
];

const Home = () => {
  return (
    <>
    <CategoryUser/>
      <HeroSection />
      
      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trending Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved collections that customers are raving about
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300">
            View All Products →
          </button>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <div className="font-semibold text-gray-800">4.8 Rating</div>
              <div className="text-sm text-gray-600">From 10k+ reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🛡️</div>
              <div className="font-semibold text-gray-800">Secure Shopping</div>
              <div className="text-sm text-gray-600">100% safe checkout</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚚</div>
              <div className="font-semibold text-gray-800">Free Shipping</div>
              <div className="text-sm text-gray-600">On orders above ₹999</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔄</div>
              <div className="font-semibold text-gray-800">Easy Returns</div>
              <div className="text-sm text-gray-600">30-day return policy</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;