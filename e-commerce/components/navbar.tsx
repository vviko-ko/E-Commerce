"use client";

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(1); // example cart count

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              E-Ghosty
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/cart" className="relative">
              <FiShoppingCart className="text-2xl text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <FiUser className="text-2xl" />
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/cart"
              className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100 flex items-center"
            >
              <FiShoppingCart className="mr-2" />
              Cart ({cartCount})
            </Link>

            <Link
              href="/login"
              className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
