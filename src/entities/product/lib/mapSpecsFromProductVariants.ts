import { ProductSpecsVariants } from '@/entities/productSpecs/@x/product';
import { Product, ProductWithDetails } from '../model/types';

export const mapSpecsFromProductVariants = (product: ProductWithDetails) => {
  const uniqueSpec = product.variations.reduce(function (
    uniqueSpec,
    variation
  ) {
    if (!uniqueSpec.get(`color${variation.specs.color.id}`)) {
      uniqueSpec.set(`color${variation.specs.color.id}`, {
        id: variation.specs.color.id,
        name: 'color',
        value: variation.specs.color,
      });
    }
    if (!uniqueSpec.get(`dimension${variation.specs.dimension.id}`)) {
      uniqueSpec.set(`dimension${variation.specs.dimension.id}`, {
        id: variation.specs.dimension.id,
        name: 'dimension',
        value: variation.specs.dimension,
      });
    }
    return uniqueSpec;
  },
  new Map<string, ProductSpecsVariants>());

  const arr = [
    {
      name: 'dimension',
      values: [...uniqueSpec.values()].filter((e) => e.name === 'dimension'),
    },
    {
      name: 'color',
      values: [...uniqueSpec.values()].filter((e) => e.name === 'color'),
    },
  ];
  return arr;
};
