'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatIDR } from '@/lib/utils';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity">
            <Button 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic
              }}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {product.category}
            </span>
          </div>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`h-4 w-4 ${
                  index < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
              {product.rating}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">{formatIDR(product.price)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}