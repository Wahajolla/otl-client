import { SeoTag } from '@/entities/seo-tag/@x/product';
import { Manufacturer } from '@/entities/manufacturer/@x/product';
import {
  Color,
  Dimension,
  ProductSpecs,
} from '@/entities/productSpecs/@x/product';

import { Category } from '@/entities/category';

export type Product = {
  id: Id;
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

export interface ProductVariation {
  id: Id;
  specs: ProductSpecs;
  price: Rubles;
  stock: number;
  sku: Sku;
}
