import { SeoTag } from '@/entities/seo-tag/@x/product';
import { Manufacturer } from '@/entities/manufacturer/@x/product';

import { Category } from '@/entities/category';
import { Spec } from '@/entities/productSpecs/model/types';

export type ProductId = Brand<Id, 'ProductId'>;

export type Product = {
  id: ProductId;
  uuid: Uuid;
  name: string;
  image: Url;
  price: Rubles;
  stock: number;
};

export type ProductWithDetails = Product & {
  // //Не нужно в модели ?
  // category: Category;
  description: string;
  category: Category;
  manufacturer: Manufacturer;
  variations: ProductVariation[]; //productVariantsIds

  //SEO props
  priority: Priority;
  tags: SeoTag[]; //tagIds
  isActive: boolean;
  metadata: string;
};

export type ProductVariationId = Brand<Id, 'ProductVariationId'>;

export interface ProductVariation {
  id: ProductVariationId;
  specs: Spec[];
  price: Rubles;
  stock: number;
  sku: Sku;
}
