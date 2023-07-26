import Link from 'next/link';
import { FC } from 'react';
import { Card } from '@/shared/ui/Card/Card';
import Image from 'next/image';
import { Product, ProductWithDetails } from '../../model/types';
import Logo from '@/shared/ui/Logo/Logo';
import SkeletonImage from '@/shared/ui/Skeleton/SkeletonImage';
import Button from '@/shared/ui/Button/Button';
import { getAveragePrice } from '../../lib/getAveragePrice';
import { formatPrice } from '../../lib/formatPrice';
import { formatQuantity } from '../../lib/formatQuantity';

interface Props {
  product: ProductWithDetails;
  actionSlot?: React.ReactNode;
  bottomContentSlot?: React.ReactNode;
  size?: 's' | 'm';
}
const ProductCard: FC<Props> = ({ product, actionSlot }) => {
  return (
    <Link href={`/product/${product.uuid}`}>
      <div className=" flex flex-col items-center items-stretch gap-4  p-4 text-start">
        <div className="relative h-60  ">
          {product.image ? (
            <Image
              alt={product.name}
              objectFit="cover"
              className="absolute bottom-0 rounded-lg "
              layout="fill"
              src={product.image}
            ></Image>
          ) : (
            <div className="m-4">
              <SkeletonImage width={5} height={5}></SkeletonImage>
            </div>
          )}
        </div>

        <div className="">
          <p>{formatQuantity(product.variations.length)}</p>
          <h1>{product.name}</h1>
          <h1>{formatPrice(getAveragePrice(product.variations))}</h1>
        </div>
      </div>
    </Link>
  );
};

export { ProductCard };
