// import type { Product } from '@/entities/product/@x/category';

export type CategoryId = Brand<Id, 'CategoryId'>;

export type Category = {
  category_id: string;
  parent_id: string;
  id_path: string;
  category: string;
  position: string;
  status: string;
  company_id: Id;
  storefront_id: string;
  product_count: string;
  seo_name: string;
  seo_path: Url;
};

// export type CategoryWithProducts = Category & {
//   products: Product[];
// };
