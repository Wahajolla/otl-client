import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Product, ProductCard, ProductWithDetails } from '@/entities/product';
import SkeletonImage from '@/shared/ui/Skeleton/SkeletonImage';

type Props = {
  products: ProductWithDetails[];
};

function ProductCards({ products }: Props) {
  return (
    <div className="grid  grid-cols-2 gap-4  lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.uuid} product={product}></ProductCard>
      ))}
    </div>
  );
}

export { ProductCards };
