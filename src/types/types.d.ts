import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
declare global {
  /**
   * Custom utility types
   */
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;

  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type Indexed<K = string, T = unknown> = { [key: K]: T };

  export type Brand<K, T> = K & { [_brand]: T };
  /**
   * Type aliases
   */
  export type Id = number;
  export type Uuid = string;
  export type Sku = number;

  export type Priority = number;
  export type Dimensions = {
    length: number;
    width: number;
    heigh: number;
  };

  export type Rubles = number;

  export type DateIso = string;

  export type Url = string;

  export type Brand<K, T> = K & { [_brand]: T };

  /**
   * NextJs
   */

  export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

  export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };

  /**
   * ⚠️ FSD
   *
   */
  declare type RootState = import('../app/appStore').RootState;
  declare type AppDispatch = import('../app/appStore').AppDispatch;
}

export {};
