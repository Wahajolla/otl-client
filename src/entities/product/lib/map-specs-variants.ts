import { Product, ProductVariation, ProductWithDetails } from '../model/types';

import {
  Spec,
  SpecName,
  NamedSpec,
  NamedSpecs,
} from '@/entities/product-specs/model/types';

export const mapSpecsFromProductVariations = (
  variations: ProductVariation[]
) => {
  type UniqueSpec = { id: Id; uniqueName: SpecName };

  const allSpecs = variations
    .map((v) => v.specs.map((s) => s))
    .flatMap((f) => f);

  const uniqueSpec = allSpecs.reduce(function (map, spec) {
    const key = `${spec.uniqueName}${spec.id}`;
    if (!map.get(key)) {
      map.set(key, spec);
    }
    return map;
  }, new Map<string, Spec>());

  const arr = [...uniqueSpec.values()].reduce((arr, u) => {
    if (!arr.some((e) => e.uniqueName === u.uniqueName)) {
      arr.push({ uniqueName: u.uniqueName, specs: [u] });
      return arr;
    }
    arr.find((e) => e.uniqueName === u.uniqueName)?.specs.push(u);
    return arr;
  }, [] as NamedSpecs[]);
  return arr;
};

export const mapSpecFromProductWithDetails = (product: ProductWithDetails) => {
  return mapSpecsFromProductVariations(product.variations);
};
