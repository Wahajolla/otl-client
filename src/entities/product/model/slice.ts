import {
  AnyAction,
  createSelector,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';


import { productApi } from '../api/product.api';
import { ProductVariationDto } from '../api/types';

import { Product, ProductVariation, ProductWithDetails } from './types';

import { Spec } from '@/entities/product-specs/model/types';

type ProductSliceState = {
  products: Product[];
  product: ProductWithDetails | null;
  variation: ProductVariation | null;
  selectedSpecs: Spec[];
};

const initialState: ProductSliceState = {
  products: [],
  product: null,
  variation: null,
  selectedSpecs: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectProductVariation: (
      state,
      action: PayloadAction<ProductVariation>
    ) => {
      state.variation = action.payload;
    },
    selectSpecs: (state, action: PayloadAction<Spec[]>) => {
      state.selectedSpecs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: ProductSliceState, action: AnyAction) => {
      //Не очень так делать вроде бы, но пока будет так
      //Почему - состояние с сервера подгружается на клиент
      return {
        ...state,
        ...action.payload.product,
      };
    });
    builder.addMatcher(
      productApi.endpoints.searchProducts.matchFulfilled,
      (state: ProductSliceState, { payload }) => {
        state.products = payload;
      }
    );
    builder.addMatcher(
      productApi.endpoints.getProductByUuid.matchFulfilled,
      (state: ProductSliceState, { payload }) => {
        state.product = payload;
        state.variation = payload.variations[0];
        state.selectedSpecs = payload.variations[0].specs;
      }
    );
    builder.addMatcher(
      productApi.endpoints.getProductById.matchFulfilled,
      (state: ProductSliceState, { payload }) => {
        state.product = payload;
        state.variation = payload.variations[0];
        state.selectedSpecs = payload.variations[0].specs;
      }
    );
  },
});

//  if (action.type === HYDRATE) {
//     //    return action.payload[reducerPath];
//     //  }

export const { selectProductVariation, selectSpecs } = productSlice.actions;
