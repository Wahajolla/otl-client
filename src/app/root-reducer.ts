import { combineReducers } from '@reduxjs/toolkit';

import { cartSlice } from '@/entities/cart';
import { categorySlice } from '@/entities/category';
import { productSlice } from '@/entities/product';
import { API } from '@/shared/api/api.base';

export const rootReducer = combineReducers({
  [productSlice.name]: productSlice.reducer,
  [categorySlice.name]: categorySlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [API.reducerPath]: API.reducer,
});
