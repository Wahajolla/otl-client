import { ManufacturerDto } from '@/entities/manufacturer/@x/product';
import { DimensionDto } from '@/entities/dimension/@x/product';
import { SeoTagDto } from '@/entities/seo-tag/@x/product';
import { ColorDto } from '@/entities/color/@x/product';
import { CategoryDto } from '@/entities/category/@x/product';

export type ProductsSearchArgsDto = {
  q: string;
};

export type ProductDto = {
  id: Id;
  name: string;
  images: Url[];
  price: Rubles;
  stock: number;
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

export type ProductVariationDto = {
  id: Id;
  dimension: DimensionDto;
  color: ColorDto;
  price: Rubles;
  stock: number;
  sku: Sku;
};
