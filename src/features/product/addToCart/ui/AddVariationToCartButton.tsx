import { productSelectors, ProductVariation } from '@/entities/product';

import { useAppSelector } from '@/shared/model/hooks';
import Button from '@/shared/ui/Button/Button';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import React from 'react';

type Props = {
  variation?: ProductVariation;
};

export const AddVariationToCartButton = ({}: Props) => {
  const variation = useAppSelector(productSelectors.variation);

  return (
    <Button
      className="flex flex-row items-center justify-center gap-1"
      size="lg"
    >
      <ShoppingCartIcon></ShoppingCartIcon> В корзину
    </Button>
  );
};
