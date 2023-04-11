export interface Color {
  hex: string;
  name: string;
  railId: string;
  description: string;
}

export interface CMSProduct {
  products: Product[];
  params: ProductParams;
}

export interface ProductParams {}
export interface CMSCategory {
  categories: Category[];
  params: CategoryParams;
}

export interface CategoryParams {
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

export interface Category {
  category_id: string;
  parent_id: string;
  id_path: string;
  category: string;
  position: string;
  status: string;
  company_id: string;
  storefront_id: string;
  product_count: string;
  seo_name: string;
  seo_path: string;
}

export interface Product {
  product_id: number;
  product: string;
  company_id?: number;
  user_id?: number;
  timestamp?: number;
  status?: string;
  visibility?: string;
  certified?: boolean;
  certs?: any[];
  sales_abstract?: string;
  feature_add?: boolean;
  bundles?: any[];
  amount?: number;
  page_title?: string;
  meta_description?: string;
  age_verification?: boolean;
  min_amount?: number;
  prices?: any[];
  base_price?: number;
  list_price?: number;
  price?: number;
  promo_price?: number;
  amount_percent_sign?: boolean;
  free_shipping?: boolean;
  weight?: number;
  detailed_params?: string;
  details?: string;
  search_words?: string;
  availability?: string;
  featured_product?: boolean;
  display_in_list?: boolean;
  manufacturer_id?: number;
  flags?: any[];
  company_details?: any;
  categories?: number[];
  images?: Image[];
  image_pairs?: any[];
  live_product?: boolean;
  addons?: Addon[];
  options?: Option[];
  variations?: Variation[];
  variation_groups?: VariationGroup[];
  parent_product_data?: any;
}

interface Image {
  image_id?: number;
  product_id?: number;
  position?: number;
  detailed?: boolean;
  url?: string;
}

interface Addon {
  addon_id?: number;
  product_id?: number;
  position?: number;
  name?: string;
  status?: boolean;
  list_mode?: boolean;
  description?: string;
  icon?: string;
  min_items?: number;
  max_items?: number;
  url?: string;
  categories?: any[];
  inventory?: any;
}

interface Option {
  option_id?: number;
  option_type?: string;
  product_id?: number;
  position?: number;
  value?: string;
  tooltip?: string;
  description?: string;
  required?: boolean;
  prefix?: string;
  suffix?: string;
  available_values?: string[];
  availability?: string;
  comment?: string;
  inventory?: any;
}

interface Variation {
  variation_id?: number;
  product_id?: number;
  position?: number;
  status?: boolean;
  sku?: string;
  amount?: number;
  weight?: number;
  prices?: any[];
  base_price?: number;
  list_price?: number;
  price?: number;
  promo_price?: number;
  promo_price_start_date?: string;
  promo_price_end_date?: string;
  visibility?: string;
  inventory?: any;
  images?: Image[];
  product_options?: any[];
  variation_name?: string;
}

interface VariationGroup {
  variation_group_id?: number;
  product_id?: number;
  status?: boolean;
  position?: number;
  variations?: Variation[];
  group_title?: string;
  description?: string;
}
