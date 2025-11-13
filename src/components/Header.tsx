import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Zuri Market
            </Link>
          </div>
          <div className="w-full max-w-xs">
            <div className="relative">
              <input
                type="search"
                placeholder="Search products..."
                className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/wishlist" className="text-gray-600 hover:text-indigo-600">
              <Heart className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-indigo-600">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}