import { Product, ProductWithDetails } from '../model/types';

import { mapProduct } from './mapping/map-product';
import { mapProductDetails } from './mapping/map-product-details';
import {
  ProductDto,
  ProductDtoWithDetails,
  ProductsSearchArgsDto,
} from './types';

import { API } from '@/shared/api/api.base';

export const productApi = API.injectEndpoints({
  endpoints: (build) => ({
    searchProducts: build.query<ProductWithDetails[], ProductsSearchArgsDto>({
      query: (params) => ({
        method: 'GET',
        url: `products`,
        params: { search: params.search, categories: params.categoires },
      }),

      transformResponse: (response: ProductDto[]) =>
        response.map(mapProductDetails),
    }),
    getProductById: build.query<ProductWithDetails, { id: number }>({
      query: ({ id }) => ({
        method: 'GET',
        url: `products/${id}`,
      }),
      transformResponse: (response: ProductDtoWithDetails) =>
        mapProductDetails(response),
    }),
    getProductByUuid: build.query<ProductWithDetails, { uuid: Uuid }>({
      query: ({ uuid }) => ({
        method: 'GET',
        url: `products/${uuid}`,
      }),
      transformResponse: (response: ProductDtoWithDetails) =>
        mapProductDetails(response),
    }),
  }),
});

export const {
  useSearchProductsQuery,
  useLazySearchProductsQuery,
  useGetProductByIdQuery,
  useLazyGetProductByIdQuery,
  util: { getRunningQueriesThunk },
} = productApi;

// export const createProducts = (args: {dto: ProductDto }) => new Promise();
