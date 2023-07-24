import { ProductWithDetails } from '@/entities/product/model/types';
import React from 'react';
import Image from 'next/image';
type Props = {
  product: ProductWithDetails;
};

export const ProductImagePreview = ({ product }: Props) => {
  return (
    <div className="relative col-span-2 h-60 w-full md:col-span-1 md:h-full md:w-full ">
      <Image
        alt="Текст"
        objectFit="contain"
        className="bottom-0 "
        layout="fill"
        src={product?.image}
      ></Image>
    </div>
  );
};
