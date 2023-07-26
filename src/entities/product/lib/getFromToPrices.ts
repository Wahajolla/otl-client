import { Spec } from '@/entities/productSpecs/@x/product';
import { ProductVariation } from '../model/types';

export const getFromToPrices = (variations: ProductVariation[]) => {
  return [variations.sort((a, b) => (a.price < b.price ? -1 : 1)).slice(1, -1)];
};
