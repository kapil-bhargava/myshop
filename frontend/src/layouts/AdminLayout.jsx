// layouts/AdminLayout.js
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FiHome,
  FiShoppingBag,
  FiGrid,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiBell,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Navigation items for admin panel
  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: FiHome },
    { name: "Products", path: "/admin/products", icon: FiShoppingBag },
    { name: "Categories", path: "/admin/categories", icon: FiGrid },
    { name: "Orders", path: "/admin/orders", icon: FiShoppingCart },
    { name: "Users", path: "/admin/users", icon: FiUsers },
    { name: "Settings", path: "/admin/settings", icon: FiSettings },
  ];

  // Toggle sidebar for mobile/responsive
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white z-30 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-0 lg:w-20"
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-4 border-b border-gray-700">
            <Link to="/admin/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              {isSidebarOpen && (
                <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Admin Panel
                </span>
              )}
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      } ${!isSidebarOpen && "justify-center"}`}
                    >
                      <Icon size={20} />
                      {isSidebarOpen && <span>{item.name}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-gray-700">
            <button
              className={`flex items-center gap-3 text-gray-300 hover:text-white transition-colors w-full ${
                !isSidebarOpen && "justify-center"
              }`}
            >
              <FiLogOut size={20} />
              {isSidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : "lg:ml-20"
        }`}
      >
        {/* Top Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="px-4 py-3 flex items-center justify-between">
            {/* Sidebar Toggle Button */}
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1 max-w-md mx-4">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search in admin panel..."
                className="bg-transparent ml-2 outline-none flex-1"
              />
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <FiBell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-pink-600 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold">Admin User</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;