import { Link } from 'react-router-dom';

export default function ProductDetail() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Product Detail</h1>
      <p className="mt-4 text-lg text-gray-500">This is a placeholder for the product detail page.</p>
       <Link to="/" className="text-indigo-600 hover:text-indigo-900 font-medium">
          Go back to Home
        </Link>
    </div>
  );
}