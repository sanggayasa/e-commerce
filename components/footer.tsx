import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { name: 'All Products', href: '/products' },
  { name: 'Fashion', href: '/products/fashion' },
  { name: 'Accessories', href: '/products/accessories' },
  { name: 'Electronics', href: '/products/electronics' },
  { name: 'Home & Living', href: '/products/home-living' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Location</h3>
            <div className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <p>
                123 Commerce Street
                <br />
                Business District
                <br />
                New York, NY 10001
              </p>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280949922!2d-74.11976404950947!3d40.697403441901946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1696431184276!5m2!1sen!2sus"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5" />
                <span>support@sanggayasa.com</span>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:text-primary"
                    >
                      <Link href={social.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t dark:border-gray-800 mt-12 pt-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Sanggayasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}