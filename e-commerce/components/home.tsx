"use client";

import ProductCard from "@/components/productcard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Sample Product",
      price: 49.99,
      image: "/shoe.webp",
    },
    {
      id: 2,
      name: "Shoes",
      price: 79.99,
      image: "/shoe.webp",
    },
    {
      id: 3,
      name: "Trendy Shirt",
      price: 29.99,
      image: "/tshirt.jpeg",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-teal-50 to-sky-50 min-h-screen">
      {/* Decorative Background Shapes */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-200 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-teal-200 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-teal-600">E-Ghosty</span>
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover the best deals on trendy products and bring style into your life!
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="./shop"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
          >
            Shop Now
          </Link>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="bg-white rounded-t-3xl py-16 px-4 shadow-inner relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-rose-50 relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            What Our Customers Say
          </h3>
          <p className="text-gray-700 italic mb-6">
            “E-Ghosty has amazing products and fast shipping. My new favorite
            online store!”
          </p>
          <p className="text-gray-800 font-semibold">— Jane Doe</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} E-Ghosty. All rights reserved.</p>
      </footer>
    </main>
  );
}
