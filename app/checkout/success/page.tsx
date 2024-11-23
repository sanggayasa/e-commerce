import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm text-center">
        <div>
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold">Order Successful!</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            A confirmation email has been sent to your email address.
          </p>
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/orders">View Orders</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}