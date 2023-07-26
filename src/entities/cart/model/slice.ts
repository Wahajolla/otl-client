import {
  type PayloadAction,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';
import type {
  Product,
  ProductVariation,
  ProductVariationId,
} from '@/entities/product/@x/cart';

import { type CartItem, type Cart } from './types';

type CartSliceState = Cart;

const initialState: CartSliceState = {
  itemsMap: {},
  version: 0,
};

function createCartItem({ product, productVariation }: CartItem): CartItem {
  return {
    quantity: 1,
    product: product,
    productVariation: productVariation,
  };
}

type CartActionType = {
  product: Product;
  productVariation: ProductVariation;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCartData: (state) => {
      state.itemsMap = {};
    },
    addOneItem: (state, action: PayloadAction<CartActionType>) => {
      const productInCart = state.itemsMap[action.payload.productVariation.id];

      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        state.itemsMap[action.payload.productVariation.id] = createCartItem({
          product: action.payload.product,
          productVariation: action.payload.productVariation,
        } as CartItem);
      }
    },
    removeOneItem: (state, action: PayloadAction<Product>) => {
      const productInCart = state.itemsMap[action.payload.id];
      if (!productInCart) {
        return;
      }

      if (productInCart.quantity > 1) {
        productInCart.quantity -= 1;
      } else {
        delete state.itemsMap[action.payload.id];
      }
    },
    removeItem: (state, action: PayloadAction<ProductVariationId>) => {
      const productInCart = state.itemsMap[action.payload];
      if (!productInCart) {
        return;
      }
      delete state.itemsMap[action.payload];
    },
    incVersion: (state) => {
      state.version += 1;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     cartApi.endpoints.cart.matchFulfilled,
  //     (state: CartSliceState, { payload }) => {
  //       // update cart state if server sent actual version
  //       if (state.version <= payload.version) {
  //         state.itemsMap = payload.itemsMap;
  //       }
  //     }
  //   );
  // },
});

export const {
  incVersion,
  addOneItem,
  removeOneItem,
  removeItem,
  clearCartData,
} = cartSlice.actions;
