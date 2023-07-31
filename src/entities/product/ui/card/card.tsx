import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { formatPrice } from '../../lib/format-price';
import { formatQuantity } from '../../lib/format-quantity';
import { getAveragePrice } from '../../lib/get-average-price';
import { ProductWithDetails } from '../../model/types';

import { Card as UICard } from '@/shared/ui';
import SkeletonImage from '@/shared/ui/Skeleton/SkeletonImage';

interface Props {
  product: ProductWithDetails;
  actionHeaderSlot?: React.ReactNode;
  actionFooterSlot?: React.ReactNode;
}
const Card: FC<Props> = ({ product, actionHeaderSlot, actionFooterSlot }) => {
  return (
    <Link
      href={`/product/${product.uuid}`}
      passHref
      onClick={() => console.log('???')}
    >
      <div>
        {actionHeaderSlot}
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
        {actionFooterSlot}
      </div>
    </Link>
  );
};

export { Card };
