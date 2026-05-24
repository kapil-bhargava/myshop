import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
// import AdminLayout from "./layouts/AdminLayout"; // Uncomment when ready

// Pages
import Home from "./pages/Home";

// Optional Pages (create later if needed)
// import About from "./pages/About";
// import Contact from "./pages/Contact";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Admin Routes (optional) */}
                {/*
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        */}

                {/* Public Routes */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />

                    {/* Products */}
                    {/* <Route path="/products" element={<Products />} /> */}
                    {/* <Route path="/products/:category" element={<Products />} /> */}
                    {/* <Route path="/product/:id" element={<ProductDetails />} /> */}

                    {/* Cart & Checkout */}
                    {/* <Route path="/cart" element={<Cart />} /> */}
                    {/* <Route path="/checkout" element={<Checkout />} /> */}

                    {/* User */}
                    {/* <Route path="/login" element={<Login />} /> */}
                    {/* <Route path="/register" element={<Register />} /> */}
                    {/* <Route path="/profile" element={<Profile />} /> */}
                    {/* <Route path="/orders" element={<Orders />} /> */}

                    {/* Extra */}
                    {/* <Route path="/about" element={<About />} /> */}
                    {/* <Route path="/contact" element={<Contact />} /> */}

                    {/* Fallback */}
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

// =========================
