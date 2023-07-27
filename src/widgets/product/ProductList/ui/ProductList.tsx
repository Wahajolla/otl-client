import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Product, ProductCard, ProductItem } from '@/entities/product';
import SkeletonImage from '@/shared/ui/Skeleton/SkeletonImage';

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {products.map((product) => (
        <ProductItem key={product.uuid} product={product}></ProductItem>
      ))}
    </div>
  );
}

export { ProductList };
