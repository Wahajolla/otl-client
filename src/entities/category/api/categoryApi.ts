import { API } from '@/shared/api/api.base';
import { mapCategories } from '../lib/mapCategoires';
import { mapCategory } from '../lib/mapCategory';
import { Category } from '../model/types';
import type {
  CategoryDetailsRequestArgs,
  CategoryDto,
  CategoryDtoWithDetails,
} from './types';

export const categoryApi = API.injectEndpoints({
  endpoints: (build) => ({
    categories: build.query<Category[], void>({
      query: () => ({
        url: `/category`,
      }),
      transformResponse: (response: CategoryDto[]) => mapCategories(response),
    }),
    category: build.query<Category, CategoryDetailsRequestArgs>({
      query: ({ id }) => ({
        url: `/category${id}`,
      }),
      transformResponse: (response: CategoryDtoWithDetails) =>
        mapCategory(response),
    }),
  }),
});

export const { useLazyCategoriesQuery, useCategoriesQuery, useCategoryQuery } = categoryApi;
