import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Product } from '../../model/types';

import { Button } from '@/shared/ui';
import { Card } from '@/shared/ui/card/card';
import Logo from '@/shared/ui/Logo/Logo';
import SkeletonImage from '@/shared/ui/Skeleton/SkeletonImage';

interface Props {
  product: Product;
  actionSlot?: React.ReactNode;
  bottomContentSlot?: React.ReactNode;
  size?: 's' | 'm';
}

const Item: FC<Props> = ({ product, actionSlot }) => {
  return (
    <Link href={`/product/${product.uuid}`}>
      <Button type="link">
        <div className="flex flex-row  gap-4">
          <div className="relative h-20 w-20 rounded ">
            {product.image ? (
              <Image
                alt={product.name}
                objectFit="cover"
                className="absolute bottom-0  rounded"
                layout="fill"
                src={product.image}
              ></Image>
            ) : (
              <div className="m-4">
                <SkeletonImage width={5} height={5}></SkeletonImage>
              </div>
            )}
          </div>
          <div>
            {' '}
            <>{product.name}</>
          </div>
          <>{actionSlot}</>
        </div>
      </Button>
    </Link>
  );
};

export { Item };
