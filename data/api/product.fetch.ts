import ky from 'ky';
import { CMSProduct } from 'types/cms.types';
import { API } from './api.base';

export const fetchProducts = () => API.get('products').json<CMSProduct>();

export const fetchProductsByCategory = (catId: number) =>
  ky
    .get('http://45.67.32.94:4002/api/products/' + { catId })
    .json<CMSProduct>();
