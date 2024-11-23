'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Heart, ShoppingCart, Truck, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatIDR } from '@/lib/utils';
import { useCart } from '@/lib/cart';
import type { Product } from '@/lib/products';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, quantity);
    router.push('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
          
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">{formatIDR(product.price)}</span>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Available Couriers:</h3>
            <div className="flex flex-wrap gap-2">
              {product.courier.map((courier) => (
                <div
                  key={courier}
                  className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                >
                  <Truck className="h-4 w-4" />
                  <span className="text-sm">{courier}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant={isLiked ? "destructive" : "outline"}
              className="flex-1"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className="mr-2 h-5 w-5" fill={isLiked ? "currentColor" : "none"} />
              {isLiked ? 'Liked' : 'Like'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}