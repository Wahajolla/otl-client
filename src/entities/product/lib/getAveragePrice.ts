import { Spec } from '@/entities/productSpecs/@x/product';
import { ProductVariation } from '../model/types';

export const getAveragePrice = (variations: ProductVariation[]) => {
  return (
    variations.reduce((sum, variation) => {
      return (sum += variation.price);
    }, 0) / variations.length
  );
};
