'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { formatIDR } from '@/lib/utils';

const paymentMethods = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: CreditCard,
  },
  {
    id: 'bank_transfer',
    name: 'Bank Transfer',
    icon: Check,
  },
];

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState('card');

  // Mock cart data - in a real app, this would come from your cart state
  const cartItems = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 4499000,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 50000;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout logic here
    router.push('/checkout/success');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required className="mt-1" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required className="mt-1" />
              </div>

              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" required className="mt-1" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" required className="mt-1" />
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                <RadioGroup
                  value={selectedPayment}
                  onValueChange={setSelectedPayment}
                  className="space-y-3"
                >
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-colors ${
                          selectedPayment === method.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Label
                          htmlFor={method.id}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <Icon className="h-5 w-5" />
                          <span>{method.name}</span>
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full">
                Complete Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-fit lg:sticky lg:top-6">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">{formatIDR(item.price * item.quantity)}</p>
                </div>
              ))}

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatIDR(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{formatIDR(shipping)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatIDR(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}