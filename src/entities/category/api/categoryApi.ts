import { API } from '@/shared/api/api.base';
import type { CategoriesSearch } from './types';

export const searchCategories = () =>
  API.get('categories').json<CategoriesSearch>();

export const categoryApi = {
  searchCategories,
};
