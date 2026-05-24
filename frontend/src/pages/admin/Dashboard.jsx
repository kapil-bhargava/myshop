// pages/admin/Dashboard.js
import React from "react";
import {
  FiShoppingBag,
  FiGrid,
  FiUsers,
  FiDollarSign,
  FiTrendingUp,
  FiPackage,
//   FiShoppingCart,
} from "react-icons/fi";

const Dashboard = () => {
  // Dashboard statistics cards data
  const statsCards = [
    {
      title: "Total Products",
      value: "1,234",
      icon: FiShoppingBag,
      color: "from-blue-500 to-blue-600",
      change: "+12%",
    },
    {
      title: "Total Categories",
      value: "45",
      icon: FiGrid,
      color: "from-green-500 to-green-600",
      change: "+5%",
    },
    {
      title: "Total Users",
      value: "8,945",
      icon: FiUsers,
      color: "from-purple-500 to-purple-600",
      change: "+18%",
    },
    {
      title: "Total Revenue",
      value: "₹12,45,678",
      icon: FiDollarSign,
      color: "from-pink-500 to-pink-600",
      change: "+23%",
    },
  ];

  // Recent orders data
  const recentOrders = [
    {
      id: "#ORD001",
      customer: "John Doe",
      amount: "₹2,499",
      status: "Delivered",
      date: "2024-01-15",
    },
    {
      id: "#ORD002",
      customer: "Jane Smith",
      amount: "₹1,899",
      status: "Processing",
      date: "2024-01-14",
    },
    {
      id: "#ORD003",
      customer: "Mike Johnson",
      amount: "₹3,299",
      status: "Shipped",
      date: "2024-01-13",
    },
    {
      id: "#ORD004",
      customer: "Sarah Williams",
      amount: "₹999",
      status: "Pending",
      date: "2024-01-12",
    },
  ];

  // Top selling products
  const topProducts = [
    { name: "Premium Cotton T-Shirt", sales: 1245, revenue: "₹4,98,000" },
    { name: "Classic Denim Jacket", sales: 892, revenue: "₹8,92,000" },
    { name: "Ethnic Kurta Set", sales: 756, revenue: "₹6,80,400" },
    { name: "Floral Maxi Dress", sales: 634, revenue: "₹9,50,000" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Processing":
        return "bg-blue-100 text-blue-700";
      case "Shipped":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Admin! Here's your store overview.</p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <FiTrendingUp size={14} />
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders Table */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
            <button className="text-pink-600 text-sm hover:text-pink-700">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr className="text-left text-sm text-gray-600">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b border-gray-100 text-sm">
                    <td className="py-3 font-medium text-gray-800">{order.id}</td>
                    <td className="py-3 text-gray-600">{order.customer}</td>
                    <td className="py-3 font-semibold text-gray-800">{order.amount}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 text-gray-500">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Top Selling Products</h2>
            <button className="text-pink-600 text-sm hover:text-pink-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <FiPackage className="text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales} sales</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
            Add New Product
          </button>
          <button className="bg-white text-gray-700 px-6 py-2 rounded-lg border border-gray-200 hover:border-pink-300 transition-all">
            Add New Category
          </button>
          <button className="bg-white text-gray-700 px-6 py-2 rounded-lg border border-gray-200 hover:border-pink-300 transition-all">
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;