import React from 'react';

import { productSelectors, ProductVariation } from '@/entities/product';
import { formatPrice } from '@/entities/product/lib/format-price';
import { AddVariationToCartButton } from '@/features/cart/addToCart';
import { useAppSelector } from '@/shared/model/hooks';
import { Card } from '@/shared/ui/card/card';

type Props = {
  variation?: ProductVariation;
};

export const ProductActionCard = ({}: Props) => {
  const variation = useAppSelector(productSelectors.variation);
  return (
    <Card className="mg:gap-4  col-span-2 flex flex-col gap-2 rounded-lg bg-[var(--alternate-background-color)] p-6 text-red-900 shadow-sm md:col-span-1 ">
      <p>Код товара: {variation?.sku}</p>
      <hr></hr>
      <h1 className="text-3xl font-bold ">
        {variation?.price && formatPrice(variation?.price, true)}
      </h1>
      {/* 
      <AddVariationToCartButton
        variation={variation}
      ></AddVariationToCartButton> */}
    </Card>
  );
};
