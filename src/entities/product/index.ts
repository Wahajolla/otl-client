export {
  productApi,
  useSearchProductsQuery,
  useGetProductByIdQuery,
  getRunningQueriesThunk,
} from './api/productApi';
export { ProductCard } from './ui/ProductCard/ProductCard';
export type { Product, ProductVariation } from './model/types';
export { productSlice } from './model/slice';
export { selectProducts } from './model/slice';
export { mapSpecsFromProductVariants } from './lib/mapSpecsFromProductVariants';