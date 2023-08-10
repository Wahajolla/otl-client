import { Spec } from '@/entities/product-specs';

export const compareSpecs = (specA: Spec, specB: Spec) => {
  return (
    specA.uuid === specB.uuid &&
    specA.values.find((a) => a.name === 'id')?.value ===
      specB.values.find((b) => b.name === 'id')?.value
  );
};
