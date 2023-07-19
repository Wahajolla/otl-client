import { API } from '@/shared/api/api.base';
import { mapProduct } from '../lib/mapProduct';
import { mapProductDetails } from '../lib/mapProductDetails';
import { Product, ProductWithDetails } from '../model/types';
import {
  ProductDto,
  ProductDtoWithDetails,
  ProductsSearchArgsDto,
} from './types';

export const productApi = API.injectEndpoints({
  endpoints: (build) => ({
    searchProducts: build.query<Product[], ProductsSearchArgsDto>({
      query: (params) => ({
        method: 'GET',
        url: `products`,
        params: { search: params.search },
      }),

      transformResponse: (response: ProductDto[]) => response.map(mapProduct),
    }),
    getProductById: build.query<ProductWithDetails, { id: number }>({
      query: ({ id }) => ({
        url: `products/${id}`,
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
  util: { getRunningQueriesThunk },
} = productApi;

// export const createProducts = (args: {dto: ProductDto }) => new Promise();
