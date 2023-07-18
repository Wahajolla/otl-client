import { SeoTag } from '@/entities/seo-tag/@x/product';
import { Manufacturer } from '@/entities/manufacturer/@x/product';
import { Color } from '@/entities/color/@x/product';
import { Dimension } from '@/entities/dimension/@x/product';
import { Category } from '@/entities/category';

export type Product = {
  id: Id;
  name: string;
  image: Url;
  price: Rubles;
  stock: number;
};

export type ProductWithDetails = {
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
  dimension: Dimension;
  color: Color;
  price: Rubles;
  stock: number;
  sku: Sku;
}
