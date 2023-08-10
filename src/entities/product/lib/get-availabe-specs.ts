import { ProductVariation } from '../model/types';

import { Spec } from '@/entities/product-specs/@x/product';

export const getAvailableSpecsToSelect = (
  variations: ProductVariation[],
  selectedSpec: Spec[]
) => {
  return variations
    .filter(
      (e) =>
        e.specs.filter(
          (s) => !selectedSpec.some((c) => c.id === s.id && c.uuid === s.uuid)
        ).length <= 1
    )
    .flatMap((e) => e.specs);
};
