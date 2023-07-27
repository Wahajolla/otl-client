import { ProductVariation } from '../model/types';

import { Spec } from '@/entities/product-specs/@x/product';

export const getAveragePrice = (variations: ProductVariation[]) => {
  return (
    variations.reduce((sum, variation) => {
      return (sum += variation.price);
    }, 0) / variations.length
  );
};
