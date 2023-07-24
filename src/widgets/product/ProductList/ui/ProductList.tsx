import { Product, ProductCard } from '@/entities/product';
import SkeletonImage from '@/shared/ui/Skeleton/SkeletonImage';
import Link from 'next/link';
import React from 'react';

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <div className="flex flex-row items-center gap-1">
            {product.image ? (
              <>Картинка</>
            ) : (
              <div className="m-4">
                <SkeletonImage width={5} height={5}></SkeletonImage>
              </div>
            )}
            <>{product.name}</>
            <>{product.price}</>
            <>{product.price}</>
          </div>
        </Link>
      ))}
    </div>
  );
}

export { ProductList };
