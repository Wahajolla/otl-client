import ky from 'ky';
import { Product } from '~types/cms.types';

export const fetchProducts = () =>
  ky.get('http://45.67.32.94:4002/api/products').json<Product[]>();

export const fetchProductsByCategory = (catId: number) =>
  ky.get('http://45.67.32.94:4002/api/products/' + { catId }).json<Product[]>();
