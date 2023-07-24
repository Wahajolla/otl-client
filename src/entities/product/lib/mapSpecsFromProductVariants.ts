import {
  Spec,
  SpecName,
  NamedSpec,
  NamedSpecs,
} from '@/entities/productSpecs/model/types';
import { Product, ProductVariation, ProductWithDetails } from '../model/types';

export const mapSpecsFromProductVariations = (
  variations: ProductVariation[]
) => {
  type UniqueSpec = { id: Id; spec_name: SpecName };

  const allSpecs = variations
    .map((v) => v.specs.map((s) => s))
    .flatMap((f) => f);

  const uniqueSpec = allSpecs.reduce(function (map, spec) {
    const key = `${spec.spec_name}${spec.id}`;
    if (!map.get(key)) {
      map.set(key, spec);
    }
    return map;
  }, new Map<string, Spec>());

  const arr = [...uniqueSpec.values()].reduce((arr, u) => {
    if (!arr.some((e) => e.spec_name === u.spec_name)) {
      arr.push({ spec_name: u.spec_name, specs: [u] });
      return arr;
    }
    arr.find((e) => e.spec_name === u.spec_name).specs.push(u);
    return arr;
  }, [] as NamedSpecs[]);
  return arr;
};

export const mapSpecFromProductWithDetails = (product: ProductWithDetails) => {
  return mapSpecsFromProductVariations(product.variations);
};
