/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { keys } from 'lodash';
import { HYDRATE } from 'next-redux-wrapper';
import wretch from 'wretch';

import { config } from '../lib/config';

/** HEADERS для авторизации и обзначения платформы
 */
export const headers = () =>
  ({
    Authorization: `Basic ${Buffer.from(
      `apiuser@yandex.ru:l5P24564f6XQ84u7PT32rX6stsJRRKu1`
    ).toString('base64')}`,
  } as any);

export const API = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.NEXT_PUBLIC_URL}/api`,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
