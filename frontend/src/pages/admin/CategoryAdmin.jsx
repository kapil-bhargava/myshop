// pages/admin/CategoryAdmin.js
import React, { useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiFolder,
  FiSave,
} from "react-icons/fi";

const CategoryAdmin = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Men's Fashion",
      slug: "mens-fashion",
      productCount: 245,
      status: "active",
      createdAt: "2024-01-01",
    },
    {
      id: 2,
      name: "Women's Fashion",
      slug: "womens-fashion",
      productCount: 312,
      status: "active",
      createdAt: "2024-01-01",
    },
    {
      id: 3,
      name: "Kid's Wear",
      slug: "kids-wear",
      productCount: 98,
      status: "active",
      createdAt: "2024-01-02",
    },
    {
      id: 4,
      name: "Footwear",
      slug: "footwear",
      productCount: 156,
      status: "inactive",
      createdAt: "2024-01-03",
    },
    {
      id: 5,
      name: "Accessories",
      slug: "accessories",
      productCount: 89,
      status: "active",
      createdAt: "2024-01-04",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Auto-generate slug from name
      slug: name === "name" ? value.toLowerCase().replace(/\s+/g, "-") : prev.slug,
    }));
  };

  // Handle add/edit category
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategory) {
      // Update existing category
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory.id
            ? { ...cat, name: formData.name, slug: formData.slug }
            : cat
        )
      );
    } else {
      // Add new category
      const newCategory = {
        id: categories.length + 1,
        name: formData.name,
        slug: formData.slug,
        productCount: 0,
        status: "active",
        createdAt: new Date().toISOString().split("T")[0],
      };
      setCategories([...categories, newCategory]);
    }
    closeModal();
  };

  // Handle edit button click
  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      slug: category.slug,
      description: "",
    });
    setIsModalOpen(true);
  };

  // Handle delete category
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  // Handle status toggle
  const toggleStatus = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id
          ? { ...cat, status: cat.status === "active" ? "inactive" : "active" }
          : cat
      )
    );
  };

  // Close modal and reset form
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({ name: "", slug: "", description: "" });
  };

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manage Categories</h1>
          <p className="text-gray-600 mt-1">Organize your products with categories</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all"
        >
          <FiPlus size={18} />
          Add New Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="p-6">
              {/* Category Icon & Name */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <FiFolder className="text-pink-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">/{category.slug}</p>
                  </div>
                </div>
                {/* Status Badge */}
                <button
                  onClick={() => toggleStatus(category.id)}
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    category.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {category.status}
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <span className="text-gray-600">Total Products</span>
                <span className="font-semibold text-gray-800">
                  {category.productCount}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Created At</span>
                <span className="text-gray-500">{category.createdAt}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleEdit(category)}
                  className="flex-1 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-center gap-2"
                >
                  <FiEdit2 size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="flex-1 bg-gray-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                >
                  <FiTrash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {editingCategory ? "Edit Category" : "Add New Category"}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                      placeholder="e.g., Men's Fashion"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Slug *
                    </label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-gray-50"
                      placeholder="auto-generated"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      URL-friendly version of the category name
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description (Optional)
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
                      placeholder="Brief description of the category"
                    />
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="flex gap-3 mt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <FiSave size={18} />
                    {editingCategory ? "Update Category" : "Create Category"}
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

export default CategoryAdmin;