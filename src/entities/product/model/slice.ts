import {
  type PayloadAction,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';
import { productApi } from '../api/productApi';
import { Product, ProductWithDetails } from './types';

type ProductSliceState = {
  products: Product[];
  product: ProductWithDetails;
};

const initialState: ProductSliceState = {
  products: [],
  product: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productApi.endpoints.searchProducts.matchFulfilled,
      (state: ProductSliceState, { payload }) => {
        // update cart state if server sent actual version
        state.products = payload;
      }
    );
  },
});

export const selectProducts = (state: RootState) =>
  Object.values(state.product.products);

export const selectProduct = (state: RootState) =>
  Object.values(state.product.product);

export const selectProductVariations = (state: RootState) =>
  Object.values(state.product.product.variations);
