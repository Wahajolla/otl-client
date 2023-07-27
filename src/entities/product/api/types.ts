import { CategoryDto } from '@/entities/category/@x/product';
import { CategoryId } from '@/entities/category/model/types';
import { ManufacturerDto } from '@/entities/manufacturer/@x/product';
import {
  DimensionDto,
  ColorDto,
  Spec,
} from '@/entities/product-specs/@x/product';
import { SeoTagDto } from '@/entities/seo-tag/@x/product';

export type ProductVariationDto = {
  id: Id;
  dimension: DimensionDto;
  color: ColorDto;
  price: Rubles;
  stock: number;
  sku: Sku;
};

export type ProductsSearchArgsDto = {
  search?: string;
  sortBy?: 'asc' | 'des';
  specs?: Spec[];
  categoires?: CategoryId[];
};

export type ProductDtoWithDetails = ProductDto & {
  // //Не нужно в модели ?
  // category: Category;
  description: string;
  images: Url[];
  category: CategoryDto;
  manufacturer: ManufacturerDto;
  variations: ProductVariationDto[]; //productVariantsIds

  //SEO props
  priority: Priority;
  tags: SeoTagDto[]; //tagIds
  isActive: boolean;
  metadata: string;
};

export type ProductDto = {
  id: Id;
  uuid: Uuid;
  name: string;
  images: Url[];
  price: Rubles;
  stock: number;
};
