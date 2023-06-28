import { Category } from '../model/types';
export interface CategoryRequestArgs {
  category_id: number;
  visible: boolean;
  current_category_id: number;
  simple: boolean;
  plain: boolean;
  limit: number;
  item_ids: string;
  group_by_level: boolean;
  get_images: boolean;
  category_delimiter: string;
  get_frontend_urls: boolean;
  max_nesting_level: null;
  get_company_name: boolean;
  storefront_ids: null;
  items_per_page: number;
  page: number;
  sort_order: string;
  sort_by: string;
  sort_order_rev: string;
  total_items: string;
}

export interface CategoriesSearch {
  categories: Category[];
  params: CategoryRequestArgs;
}
