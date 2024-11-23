import { Layers, Shirt, Watch, Laptop, Home } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'All Products',
    icon: Layers,
    href: '/products',
  },
  {
    id: 2,
    name: 'Fashion',
    icon: Shirt,
    href: '/products?category=Fashion',
  },
  {
    id: 3,
    name: 'Accessories',
    icon: Watch,
    href: '/products?category=Accessories',
  },
  {
    id: 4,
    name: 'Electronics',
    icon: Laptop,
    href: '/products?category=Electronics',
  },
  {
    id: 5,
    name: 'Home & Living',
    icon: Home,
    href: '/products?category=Home & Living',
  },
];

export default function CategorySection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={category.href}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 mb-4 text-primary" />
                <span className="text-lg font-medium text-center">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}