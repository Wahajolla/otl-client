export {
  productApi,
  useSearchProductsQuery,
  useGetProductByIdQuery,
  getRunningQueriesThunk,
} from './api/productApi';
export { ProductCard } from './ui/ProductCard/ProductCard';
export { ProductItem } from './ui/ProductItem/ProductItem';
export type {
  Product,
  ProductVariation,
  ProductWithDetails,
} from './model/types';
export { productSlice, selectProductVariation } from './model/slice';
export { productSelectors } from './model/selectors';
export {
  mapSpecsFromProductVariations,
  mapSpecFromProductWithDetails,
} from './lib/mapSpecsFromProductVariants';
export { compareSpecs } from './lib/compareSpecs';
