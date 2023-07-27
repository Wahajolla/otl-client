import { ProductVariation } from '../model/types';

import { Spec } from '@/entities/product-specs/@x/product';

export const getFromToPrices = (variations: ProductVariation[]) => {
  return [variations.sort((a, b) => (a.price < b.price ? -1 : 1)).slice(1, -1)];
};
