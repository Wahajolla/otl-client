import { Product, ProductVariation, ProductWithDetails } from '../model/types';

import { Spec, NamedSpecs } from '@/entities/product-specs/model/types';

export const getUniqueSpecsFromProductVariations = (
  variations: ProductVariation[]
) => {
  const allSpecs = variations
    .map((v) => v.specs.map((s) => s))
    .flatMap((f) => f);

  const uniqueSpec = allSpecs.reduce(function (map, spec) {
    const key = `${spec.uuid}${
      spec.values.find((v) => v.name === 'id')?.value
    }`;
    if (!map.get(key)) {
      map.set(key, spec);
    }
    return map;
  }, new Map<string, Spec>());

  const arr = [...uniqueSpec.values()].reduce((arr, u) => {
    if (!arr.some((e) => e.uuid === u.uuid)) {
      arr.push({ uuid: u.uuid, specs: [u] });
      return arr;
    }
    arr.find((e) => e.uuid === u.uuid)?.specs.push(u);
    return arr;
  }, [] as NamedSpecs[]);
  return arr;
};

export const getUniqueSpecsFromProduct = (product: ProductWithDetails) => {
  return getUniqueSpecsFromProductVariations(product.variations);
};
