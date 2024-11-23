'use client';

import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart';
import { formatIDR } from '@/lib/utils';
import { useSession } from 'next-auth/react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCart();
  const { data: session } = useSession();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Add some items to your cart to see them here
        </p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/products/${item.id}`}
                  className="text-lg font-semibold hover:text-primary transition-colors line-clamp-1"
                >
                  {item.name}
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.category}
                </p>
                <p className="font-medium">{formatIDR(item.price)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    if (item.quantity > 1) {
                      updateQuantity(item.id, item.quantity - 1);
                    }
                  }}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal ({items.length} items)</span>
              <span>{formatIDR(getTotal())}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatIDR(getTotal())}</span>
              </div>
            </div>
            {session ? (
              <Button className="w-full">Proceed to Checkout</Button>
            ) : (
              <div className="space-y-4">
                <Button className="w-full" asChild>
                  <Link href="/auth/login">Login to Checkout</Link>
                </Button>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Or{' '}
                  <Link href="/auth/register" className="text-primary hover:underline">
                    create an account
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}