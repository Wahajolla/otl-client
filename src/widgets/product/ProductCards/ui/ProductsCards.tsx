import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Product, ProductCard, ProductWithDetails } from '@/entities/product';
import { Button } from '@/shared/ui';
import SkeletonImage from '@/shared/ui/Skeleton/SkeletonImage';

type Props = {
  products: ProductWithDetails[];
};

function ProductCards({ products }: Props) {
  return (
    <div className="grid grid-cols-1 place-items-center place-items-stretch gap-4 md:grid-cols-2  lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.uuid} product={product}></ProductCard>
      ))}
    </div>
  );
}

export { ProductCards };
