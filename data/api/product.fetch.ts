import ky from 'ky';
import { Product } from '~types/cms.types';

export const fetchProducts = () =>
  ky.get('http://164.215.102.47:4002/api/products').json<Product[]>();

export const fetchProductsByCategory = (catId: number) =>
  ky
    .get('http://164.215.102.47:4002/api/products/' + { catId })
    .json<Product[]>();
