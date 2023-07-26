import { getAvailableSpecsToSelect } from '../lib/getAvailabeSpecsToSelect';
import { mapSpecsFromProductVariations } from '../lib/mapSpecsFromProductVariants';

const products = (state: RootState) => state.product.products;

const product = (state: RootState) => state.product.product;

const variation = (state: RootState) => state.product?.variation;

const selectedSpecs = (state: RootState) => variation(state)?.specs || [];

const specs = (state: RootState) =>
  mapSpecsFromProductVariations(productVariations(state));

const productVariations = (state: RootState) =>
  state.product?.product?.variations || [];

const availableSpecs = (state: RootState) =>
  getAvailableSpecsToSelect(productVariations(state), selectedSpecs(state));

export const productSelectors = {
  products,
  product,
  productVariations,
  variation,
  specs,
  selectedSpecs,
  availableSpecs,
};
