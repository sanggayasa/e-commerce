import HeroCarousel from '@/components/hero-carousel';
import CategorySection from '@/components/category-section';
import ProductGrid from '@/components/product-grid';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      <CategorySection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <a
            href="/products"
            className="text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            View All Products →
          </a>
        </div>
        <ProductGrid />
      </div>
    </div>
  );
}