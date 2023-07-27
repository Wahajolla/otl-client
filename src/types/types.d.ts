import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
declare global {
  
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  
  export type Uuid = string;

  
  export type Sku = number;

  
  export type Url = string;

  
  
  export type Rubles = number;
  
  
  
  export type Priority = number;
  
  /**
   * Custom utility types
   */
  export type Nullable<T> = T | null;
  
  /**
   * NextJs
   */
  export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

  
  
  export type Keys<T extends Record<string, unknown>> = keyof T;
  
  
  export type Indexed<K = string, T = unknown> = { [key: K]: T };

  
  /**
   * Type aliases
   */
  export type Id = number;

  
  export type Dimensions = {
    length: number;
    width: number;
    heigh: number;
  };

  
  export type DateIso = string;

  
  export type Brand<K, T> = K & { [_brand]: T };

  

  export type Brand<K, T> = K & { [_brand]: T };

  export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };

  /**
   * ⚠️ FSD
   *
   */
  declare type RootState = import('../app/app-store').RootState;
  declare type AppDispatch = import('../app/app-store').AppDispatch;
}

export {};
