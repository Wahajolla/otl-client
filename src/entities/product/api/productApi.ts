import { API } from '@/shared/api/api.base';
import { Product } from '../model/types';
import { ProductsSearch } from './types';

export const searchProducts = () => API.get('products').json<ProductsSearch>();

//Чет странный АПИ
//Разве не какой-нибудь category/[slug]/products?
export const getProductsByCategoryId = (params: { category_id: Id }) =>
  API.get(`products/${params.category_id}`).json<Product>();

export const productApi = {
  searchProducts,
  getProductsByCategoryId,
};
