import { Spec } from '@/entities/productSpecs/model/types';
import {
  type PayloadAction,
  createSlice,
  createSelector,
  AnyAction,
} from '@reduxjs/toolkit';
import { productApi } from '../api/productApi';
import { ProductVariationDto } from '../api/types';
import { Product, ProductVariation, ProductWithDetails } from './types';
import { HYDRATE } from 'next-redux-wrapper';

type ProductSliceState = {
  products: Product[];
  product: ProductWithDetails;
  variation: ProductVariation;
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
