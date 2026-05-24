// pages/admin/ProductAdmin.js
import  { useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiDollarSign,
  FiTag,
  FiGrid,
  FiEye,
} from "react-icons/fi";

const ProductAdmin = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 499,
      originalPrice: 999,
      category: "Men's Fashion",
      stock: 245,
      status: "active",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      createdAt: "2024-01-01",
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 1299,
      originalPrice: 2499,
      category: "Outerwear",
      stock: 89,
      status: "active",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      createdAt: "2024-01-02",
    },
    {
      id: 3,
      name: "Ethnic Kurta Set",
      price: 899,
      originalPrice: 1899,
      category: "Ethnic Wear",
      stock: 156,
      status: "inactive",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
      createdAt: "2024-01-03",
    },
    {
      id: 4,
      name: "Floral Maxi Dress",
      price: 1499,
      originalPrice: 2999,
      category: "Women's Fashion",
      stock: 67,
      status: "active",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      createdAt: "2024-01-04",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    originalPrice: "",
    category: "",
    stock: "",
    description: "",
    image: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle add/edit product
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      // Update existing product
      setProducts(
        products.map((prod) =>
          prod.id === editingProduct.id
            ? { ...prod, ...formData, price: Number(formData.price), originalPrice: Number(formData.originalPrice), stock: Number(formData.stock) }
            : prod
        )
      );
    } else {
      // Add new product
      const newProduct = {
        id: products.length + 1,
        ...formData,
        price: Number(formData.price),
        originalPrice: Number(formData.originalPrice),
        stock: Number(formData.stock),
        status: "active",
        createdAt: new Date().toISOString().split("T")[0],
      };
      setProducts([...products, newProduct]);
    }
    closeModal();
  };

  // Handle edit button click
  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      category: product.category,
      stock: product.stock,
      description: product.description || "",
      image: product.image,
    });
    setIsModalOpen(true);
  };

  // Handle delete product
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((prod) => prod.id !== id));
    }
  };

  // Handle status toggle
  const toggleStatus = (id) => {
    setProducts(
      products.map((prod) =>
        prod.id === id
          ? { ...prod, status: prod.status === "active" ? "inactive" : "active" }
          : prod
      )
    );
  };

  // Close modal and reset form
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData({
      name: "",
      price: "",
      originalPrice: "",
      category: "",
      stock: "",
      description: "",
      image: "",
    });
  };

  // Calculate discount percentage
  const getDiscount = (price, originalPrice) => {
    if (!originalPrice) return 0;
    return Math.floor(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manage Products</h1>
          <p className="text-gray-600 mt-1">Add, edit, and manage your product inventory</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all"
        >
          <FiPlus size={18} />
          Add New Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr className="text-left text-sm font-semibold text-gray-700">
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  {/* Product Info */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{product.name}</p>
                        <p className="text-xs text-gray-500">ID: #{product.id}</p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {product.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-800">₹{product.price}</p>
                      {product.originalPrice && (
                        <>
                          <p className="text-xs text-gray-400 line-through">
                            ₹{product.originalPrice}
                          </p>
                          <p className="text-xs text-green-600">
                            {getDiscount(product.price, product.originalPrice)}% OFF
                          </p>
                        </>
                      )}
                    </div>
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-4">
                    <span className={`font-semibold ${product.stock < 50 ? 'text-orange-600' : 'text-green-600'}`}>
                      {product.stock} units
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleStatus(product.id)}
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        product.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {product.status}
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <FiEdit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <FiTrash2 size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <FiEye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {editingProduct ? "Edit Product" : "Add New Product"}
                </h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <FiX size={24} />
                </button>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                      placeholder="Enter product name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Selling Price *
                    </label>
                    <div className="relative">
                      <FiDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                        placeholder="499"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Original Price
                    </label>
                    <div className="relative">
                      <FiTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="number"
                        name="originalPrice"
                        value={formData.originalPrice}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                        placeholder="999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category *
                    </label>
                    <div className="relative">
                      <FiGrid className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                      >
                        <option value="">Select Category</option>
                        <option value="Men's Fashion">Men's Fashion</option>
                        <option value="Women's Fashion">Women's Fashion</option>
                        <option value="Kid's Wear">Kid's Wear</option>
                        <option value="Footwear">Footwear</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Outerwear">Outerwear</option>
                        <option value="Ethnic Wear">Ethnic Wear</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Stock Quantity *
                    </label>
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                      placeholder="100"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Image URL *
                    </label>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                      placeholder="Product description..."
                    />
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="flex gap-3 mt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    {editingProduct ? "Update Product" : "Create Product"}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductAdmin;