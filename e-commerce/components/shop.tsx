"use client";

import React, { useState } from "react";
import ProductCard from "@/components/productcard";

export default function ShopPage() {
  const allProducts = [
    { id: 1, name: "Sample Product", price: 49.99, image: "/shoe.webp" },
    { id: 2, name: "Cool Gadget", price: 79.99, image: "/shoe.webp" },
    { id: 3, name: "Trendy Shirt", price: 29.99, image: "/tshirt.jpeg" },
    { id: 4, name: "Sneakers", price: 99.99, image: "/shoe.webp" },
    { id: 5, name: "Smartwatch", price: 199.99, image: "/shoe.webp" },
    { id: 6, name: "Stylish Hat", price: 19.99, image: "/tshirt.jpeg" },
  ];

  const [maxPrice, setMaxPrice] = useState<number>(200);

  const filteredProducts = allProducts.filter(
    (product) => product.price <= maxPrice
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-teal-50 to-sky-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Shop All Products
        </h1>

        {/* Filter UI */}
        <div className="flex justify-center mb-8 gap-4">
          <label className="flex items-center gap-2">
            <span className="text-gray-700">Max Price:</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="border border-gray-300 rounded px-3 py-1 w-24"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
