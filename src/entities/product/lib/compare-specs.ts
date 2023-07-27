import { Spec } from '@/entities/product-specs';

export const compareSpecs = (specA: Spec, specB: Spec) => {
  return specA.uniqueName === specB.uniqueName && specA.id === specB.id;
};
