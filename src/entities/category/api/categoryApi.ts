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
    searchCategories: build.query<Category[], void>({
      query: () => ({
        url: `/categories`,
      }),
      transformResponse: (response: CategoryDto[]) => mapCategories(response),
    }),
    getCategoryById: build.query<Category, CategoryDetailsRequestArgs>({
      query: ({ id }) => ({
        url: `/categories/${id}`,
      }),
      transformResponse: (response: CategoryDtoWithDetails) =>
        mapCategory(response),
    }),
    getCategoryByUuid: build.query<Category, { uuid: Uuid }>({
      query: ({ uuid }) => ({
        url: `/categories/${uuid}`,
      }),
      transformResponse: (response: CategoryDtoWithDetails) =>
        mapCategory(response),
    }),
  }),
});

export const {
  useLazySearchCategoriesQuery,
  useSearchCategoriesQuery,
  useGetCategoryByIdQuery,
  useLazyGetCategoryByIdQuery,
} = categoryApi;
