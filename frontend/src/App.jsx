import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-800">SOLE<span className="text-blue-600">STYLE</span></div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Shop</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Sale</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 text-xl">🛒</button>
              <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Sign In</button>
              <button className="md:hidden text-gray-700 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">Home</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">Shop</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">New Arrivals</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">Sale</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">Contact</a>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign In</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                Step Into <span className="text-blue-600">Comfort</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Premium quality shoes designed for your everyday adventures. Experience the perfect blend of style and performance.
              </p>
              <div className="space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                  Shop Now →
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                  View Collection
                </button>
              </div>
              <div className="flex mt-8 justify-center md:justify-start space-x-8">
                <div><span className="text-2xl font-bold text-gray-800">200+</span><p className="text-gray-500">Styles</p></div>
                <div><span className="text-2xl font-bold text-gray-800">50k+</span><p className="text-gray-500">Happy Customers</p></div>
                <div><span className="text-2xl font-bold text-gray-800">Free</span><p className="text-gray-500">Shipping</p></div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-full p-8 shadow-2xl">
                <div className="text-9xl">👟</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:shadow-lg transition rounded-xl">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on all orders over $50</p>
            </div>
            <div className="text-center p-6 hover:shadow-lg transition rounded-xl">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">30-Day Returns</h3>
              <p className="text-gray-600">Easy returns within 30 days</p>
            </div>
            <div className="text-center p-6 hover:shadow-lg transition rounded-xl">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Featured Collection</h2>
          <p className="text-center text-gray-600 mb-12">Our most popular styles this season</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-7xl">👟</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Classic Sneaker</h3>
                  <p className="text-gray-600 mb-4">Comfortable and stylish everyday wear</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">$89.99</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-blue-100 mb-8">Subscribe to get exclusive offers and updates</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white" />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SOLE<span className="text-blue-400">STYLE</span></h3>
              <p className="text-gray-400">Premium shoes for every step of your journey.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Men</a></li>
                <li><a href="#" className="hover:text-white">Women</a></li>
                <li><a href="#" className="hover:text-white">Kids</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4 text-2xl">
                <a href="#" className="hover:text-blue-400">📘</a>
                <a href="#" className="hover:text-blue-400">📷</a>
                <a href="#" className="hover:text-blue-400">🐦</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SOLE STYLE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App