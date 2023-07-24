import { Spec } from '@/entities/productSpecs';

export const compareSpecs = (specA: Spec, specB: Spec) => {
  return specA.spec_name === specB.spec_name && specA.id === specB.id;
};
