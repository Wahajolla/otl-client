import { Product } from '../model/types';

export interface ProductsSearch {
  products: Product[];
  params: ProductRequestArgs;
}

export interface ProductRequestArgs {}
