import { createSelector } from '@reduxjs/toolkit';

import { CartItem } from './types';

import { ProductVariationId } from '@/entities/product/@x/cart';

const totalPrice = (state: RootState) =>
  Object.values(state.cart.itemsMap).reduce(
    (acc, item) => acc + item.quantity * item.productVariation.price,
    0
  );

const products = (state: RootState) => Object.values(state.cart.itemsMap);

const quantity = (state: RootState) =>
  Object.values(state.cart.itemsMap).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

const variation = createSelector(
  products,
  (_: RootState, varitaionId: ProductVariationId) => varitaionId,
  (items: CartItem[], varitaionId: ProductVariationId): CartItem | undefined =>
    items.find(({ productVariation }) => productVariation.id === varitaionId)
);

export const cartSelectors = {
  totalPrice,
  products,
  quantity,
  variation,
};
