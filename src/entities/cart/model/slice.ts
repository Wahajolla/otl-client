import {
  type PayloadAction,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';

type CartSliceState = {};

const initialState: CartSliceState = {
  itemsMap: {},
  version: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
