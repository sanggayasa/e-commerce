'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product-card';
import ProductFilters from '@/components/product-filters';
import { products } from '@/lib/products';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [selectedCouriers, setSelectedCouriers] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCourier = selectedCouriers.length === 0 || 
      selectedCouriers.some(courier => product.courier.includes(courier));
    const matchesRating = product.rating >= minRating;

    return matchesSearch && matchesCategory && matchesPrice && matchesCourier && matchesRating;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col space-y-6">
        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:w-auto"
          >
            <SlidersHorizontal className="mr-2 h-5 w-5" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          {showFilters && (
            <ProductFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCouriers={selectedCouriers}
              setSelectedCouriers={setSelectedCouriers}
              minRating={minRating}
              setMinRating={setMinRating}
            />
          )}

          {/* Product Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}