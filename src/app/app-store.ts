// store.ts

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper } from 'next-redux-wrapper';

import { rootReducer } from './root-reducer';

import { API } from '@/shared/api/api.base';

export type RootState = ReturnType<Store['getState']>;

type Store = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = Store['dispatch'];

export const storeWrapper = createWrapper(makeStore, {});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export function makeStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([API.middleware]),
    devTools: true,
  });

  setupListeners(store.dispatch);
  return store;
}
