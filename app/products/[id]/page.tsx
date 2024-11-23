import { products } from '@/lib/products';
import ProductDetail from '@/components/product-detail';

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetail product={product} />;
}