export type {
  ProductWithDetails,
  ProductVariation,
  Product,
} from './model/types';

export {
  useSearchProductsQuery,
  useGetProductByIdQuery,
  productApi,
  getRunningQueriesThunk,
} from './api/product.api';

export { selectProductVariation, productSlice } from './model/slice';
export { productSelectors } from './model/selectors';

export { Item as ProductItem } from './ui/item/item';
export { Card as ProductCard } from './ui/card/card';

export { mapProductDetails } from './api/mapping/map-product-details';

export { mapProduct } from './api/mapping/map-product';
export {
  getUniqueSpecsFromProductVariations,
  getUniqueSpecsFromProduct,
} from './lib/get-unique-specs';

export { compareSpecs } from './lib/compare-specs';

export { _testProduct_ } from './__tests__';

export { _mockProduct_ } from './__mocks__';
