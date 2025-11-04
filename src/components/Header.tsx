'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            ICAROS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link href="/products/icaros-circle" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    ICAROS Circle
                  </Link>
                  <Link href="/products/icaros-health" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    ICAROS Health
                  </Link>
                  <Link href="/products/icaros-guardian" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    ICAROS Guardian
                  </Link>
                  <Link href="/products/icaros-lightning" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    ICAROS Lightning
                  </Link>
                  <Link href="/products/icaros-cloud" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    ICAROS Cloud
                  </Link>
                  <Link href="/products/icaros-cloud-360" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    ICAROS Cloud 360
                  </Link>
                  <hr className="my-2" />
                  <Link href="/about/roi" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    ROI Calculator
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
            <Link href="/experiences" className="text-gray-700 hover:text-gray-900 font-medium">
              Games
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-gray-900 font-medium">
              News
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact
            </Link>
            <a
              href="https://shop.icaros.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/products/icaros-circle" className="text-gray-700 hover:text-gray-900 py-2">
                ICAROS Circle
              </Link>
              <Link href="/products/icaros-health" className="text-gray-700 hover:text-gray-900 py-2">
                ICAROS Health
              </Link>
              <Link href="/products/icaros-guardian" className="text-gray-700 hover:text-gray-900 py-2">
                ICAROS Guardian
              </Link>
              <Link href="/products/icaros-lightning" className="text-gray-700 hover:text-gray-900 py-2">
                ICAROS Lightning
              </Link>
              <Link href="/products/icaros-cloud" className="text-gray-700 hover:text-gray-900 py-2">
                ICAROS Cloud
              </Link>
              <Link href="/products/icaros-cloud-360" className="text-gray-700 hover:text-gray-900 py-2">
                ICAROS Cloud 360
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 py-2">
                About
              </Link>
              <Link href="/experiences" className="text-gray-700 hover:text-gray-900 py-2">
                Games
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-gray-900 py-2">
                News
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 py-2">
                Contact
              </Link>
              <a
                href="https://shop.icaros.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-center"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
