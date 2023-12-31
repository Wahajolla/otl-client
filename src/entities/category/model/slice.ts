import { createSlice, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { categoryApi } from '../api/category.api';

import { Category } from './types';

type CategorySliceState = {
  categories: Category[];
  category: Category | null;
};

const initialState: CategorySliceState = {
  categories: [],
  category: null,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: CategorySliceState, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.category,
      };
    });
    builder.addMatcher(
      categoryApi.endpoints.searchCategories.matchFulfilled,
      (state: CategorySliceState, { payload }) => {
        state.categories = payload;
      }
    );
    builder.addMatcher(
      categoryApi.endpoints.getCategoryById.matchFulfilled,
      (state: CategorySliceState, { payload }) => {
        state.category = payload;
      }
    );
    builder.addMatcher(
      categoryApi.endpoints.getCategoryByUuid.matchFulfilled,
      (state: CategorySliceState, { payload }) => {
        state.category = payload;
      }
    );
  },
});
