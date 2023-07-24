import { combineReducers } from '@reduxjs/toolkit';
import { productSlice } from '@/entities/product';
import { API } from '@/shared/api/api.base';

export const rootReducer = combineReducers({
  [productSlice.name]: productSlice.reducer,
  [API.reducerPath]: API.reducer,
});
