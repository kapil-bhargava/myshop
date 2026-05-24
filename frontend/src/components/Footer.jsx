import { Link } from "react-router-dom";
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCreditCard,
  FiShield,
  FiTruck,
  FiRefreshCw
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Track Order", path: "/track-order" },
    { name: "Returns & Exchange", path: "/returns" },
    { name: "FAQs", path: "/faqs" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Sitemap", path: "/sitemap" },
  ];

  const categories = [
    { name: "Men's Fashion", path: "/men" },
    { name: "Women's Fashion", path: "/women" },
    { name: "Kid's Wear", path: "/kids" },
    { name: "Footwear", path: "/footwear" },
    { name: "Accessories", path: "/accessories" },
    { name: "Winter Collection", path: "/winter" },
    { name: "Summer Collection", path: "/summer" },
    { name: "Festive Wear", path: "/festive" },
  ];

  const paymentMethods = [
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" },
    { name: "PayPal", icon: "💰" },
    { name: "Google Pay", icon: "📱" },
    { name: "PhonePe", icon: "📱" },
    { name: "Cash on Delivery", icon: "💵" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Eshop
              </h3>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Your one-stop destination for premium fashion. Discover the latest trends with quality assurance and secure shopping.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <FiMapPin className="text-pink-400 flex-shrink-0" />
                <span>123 Fashion Street, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiPhone className="text-pink-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiMail className="text-pink-400 flex-shrink-0" />
                <span>support@eshop.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-pink-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Shop by Category</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.path}
                    className="text-sm hover:text-pink-400 transition-colors duration-300"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <form className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 text-white text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
            {/* Social Links */}
            <div className="mb-6">
              <h4 className="text-white font-semibold text-sm mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-colors duration-300"
                >
                  <FiFacebook size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-colors duration-300"
                >
                  <FiTwitter size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-colors duration-300"
                >
                  <FiInstagram size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-colors duration-300"
                >
                  <FiYoutube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 text-sm">
              <FiTruck className="text-pink-400 text-xl" />
              <div>
                <p className="font-semibold text-white">Free Shipping</p>
                <p className="text-xs">On orders above ₹999</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FiRefreshCw className="text-pink-400 text-xl" />
              <div>
                <p className="font-semibold text-white">Easy Returns</p>
                <p className="text-xs">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FiShield className="text-pink-400 text-xl" />
              <div>
                <p className="font-semibold text-white">Secure Payments</p>
                <p className="text-xs">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FiCreditCard className="text-pink-400 text-xl" />
              <div>
                <p className="font-semibold text-white">COD Available</p>
                <p className="text-xs">Pay at your doorstep</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-gray-400">Payment Methods:</span>
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 bg-gray-800 rounded-full text-xs"
                >
                  <span>{method.icon}</span>
                  <span>{method.name}</span>
                </div>
              ))}
            </div>
            <div className="text-xs text-gray-500">
              © {currentYear} Eshop. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;