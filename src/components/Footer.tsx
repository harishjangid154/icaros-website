import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/icaros-circle" className="text-gray-400 hover:text-white transition-colors">
                  ICAROS Circle
                </Link>
              </li>
              <li>
                <Link href="/products/icaros-health" className="text-gray-400 hover:text-white transition-colors">
                  ICAROS Health
                </Link>
              </li>
              <li>
                <Link href="/products/icaros-guardian" className="text-gray-400 hover:text-white transition-colors">
                  ICAROS Guardian
                </Link>
              </li>
              <li>
                <Link href="/products/icaros-lightning" className="text-gray-400 hover:text-white transition-colors">
                  ICAROS Lightning
                </Link>
              </li>
              <li>
                <Link href="/products/icaros-cloud" className="text-gray-400 hover:text-white transition-colors">
                  ICAROS Cloud
                </Link>
              </li>
              <li>
                <Link href="/products/icaros-cloud-360" className="text-gray-400 hover:text-white transition-colors">
                  ICAROS Cloud 360
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-gray-400 hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about/roi" className="text-gray-400 hover:text-white transition-colors">
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://shop.icaros.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="https://live.icarace.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ICARACE
                </a>
              </li>
              <li>
                <Link href="/info/search" className="text-gray-400 hover:text-white transition-colors">
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/info/imprint" className="text-gray-400 hover:text-white transition-colors">
                  Imprint
                </Link>
              </li>
              <li>
                <Link href="/info/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            For free consultation call{' '}
            <a href="tel:+4989414182100" className="text-white hover:underline">
              +49 89 4141 821 00
            </a>
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © {new Date().getFullYear()} ICAROS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
