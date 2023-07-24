import { Spec } from '@/entities/productSpecs/@x/product';
import { ProductVariation } from '../model/types';

export const getAvailableSpecsToSelect = (
  variations: ProductVariation[],
  selectedSpec: Spec[]
) => {
  return variations
    .filter(
      (e) =>
        e.specs.filter(
          (s) =>
            !selectedSpec.some(
              (c) => c.id === s.id && c.spec_name === s.spec_name
            )
        ).length <= 1
    )
    .flatMap((e) => e.specs);
};
