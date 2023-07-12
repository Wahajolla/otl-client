import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
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

  export type Rubles = number;

  export type DateIso = string;

  export type Url = string;

  /**
   * NextJs
   */

  export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
  };

  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };

  /**
   * ⚠️ FSD
   *
   */
  declare type RootState = import('../src/app/appStore').RootState;
  declare type AppDispatch = import('../src/app/appStore').AppDispatch;
  declare type NextPageWithLayout =
    import('../src/app/appStore').NextPageWithLayout;
}

export {};
