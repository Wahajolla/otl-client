import { API } from '@/shared/api/api.base';
import { mapCategory } from '../lib/mapCategory';
import type { CategoryDto } from './types';

export const searchCategories = () =>
  API.get('/category')
    .json<CategoryDto[]>()
    .then((response) => response.map((dto) => mapCategory(dto)))
    .catch((e) => console.log(e));

export const categoryApi = {
  searchCategories,
};
