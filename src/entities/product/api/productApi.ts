import { API } from '@/shared/api/api.base';
import { mapProduct } from '../lib/mapProduct';
import { mapProductDetails } from '../lib/mapProductDetails';
import {
  ProductDto,
  ProductDtoWithDetails,
  ProductsSearchArgsDto,
} from './types';
// import { ProductsSearch } from './types';

// export const searchProducts = () => API.get('/products')();

export const searchProducts = (args: ProductsSearchArgsDto) =>
  API.get(`/products${new URLSearchParams(args).toString()}`)
    .json<ProductDto[]>()
    .then((response) => response.map((dto) => mapProduct(dto)))
    .catch((e) => console.log(e));

export const getProductById = (options: { id: Id }) =>
  API.get(`/products/${options.id}`)
    .json<ProductDtoWithDetails>()
    .then((dto) => mapProductDetails(dto))
    .catch((e) => console.log(e));

export const productApi = {
  searchProducts,
  getProductById,
};

// export const createProducts = (args: {dto: ProductDto }) => new Promise();
