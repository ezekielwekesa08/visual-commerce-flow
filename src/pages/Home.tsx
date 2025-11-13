import { products } from '../lib/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div>
      <section className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c84160ca-386b-48bd-b8c9-4f39c5b5807c/zuri-market-hero-9fnpzxb-1763028062760.webp"
            alt="Zuri Market Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Discover Authentic African Craft</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Your one-stop marketplace for unique, handcrafted goods from across the continent.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}