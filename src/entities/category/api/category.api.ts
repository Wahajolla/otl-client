import { Category, CategoryWithDetails } from '../model/types';

import { mapCategories } from './mapping/map-categories';
import { mapCategory } from './mapping/map-category';
import { mapCategoryDetails } from './mapping/map-category-details';
import type {
  CategoryDetailsRequestArgs,
  CategoryDto,
  CategoryDtoWithDetails,
} from './types';

import { API } from '@/shared/api/api.base';

export const categoryApi = API.injectEndpoints({
  endpoints: (build) => ({
    searchCategories: build.query<Category[], void>({
      query: () => ({
        url: `/categories`,
      }),
      transformResponse: (response: CategoryDto[]) => mapCategories(response),
    }),
    getCategoryById: build.query<
      CategoryWithDetails,
      CategoryDetailsRequestArgs
    >({
      query: ({ id }) => ({
        url: `/categories/${id}`,
      }),
      transformResponse: (response: CategoryDtoWithDetails) =>
        mapCategoryDetails(response),
    }),
    getCategoryByUuid: build.query<CategoryWithDetails, { uuid: Uuid }>({
      query: ({ uuid }) => ({
        url: `/categories/${uuid}`,
      }),
      transformResponse: (response: CategoryDtoWithDetails) =>
        mapCategoryDetails(response),
    }),
  }),
});

export const {
  useLazySearchCategoriesQuery,
  useSearchCategoriesQuery,
  useGetCategoryByIdQuery,
  useLazyGetCategoryByIdQuery,
} = categoryApi;
