/* eslint-disable @typescript-eslint/no-explicit-any */
import ky from 'ky';
import { keys } from 'lodash';

/** Базовый URL */
export const prefixUrl = 'http://94.250.250.194/api/2.0/';

/** HEADERS для авторизации и обзначения платформы
 */
export const headers = () =>
  ({
    Authorization: `Basic ${Buffer.from(
      `apiuser@yandex.ru:l5P24564f6XQ84u7PT32rX6stsJRRKu1`
    ).toString('base64')}`,
    'Content-Type': 'application/json',
  } as any);
/**Инициализация апи дефолтными опциями
 */
export const API = ky.extend({
  prefixUrl,
  retry: 0,
  throwHttpErrors: true,
  timeout: 300000,
  hooks: {
    beforeRequest: [
      (request) => {
        // hook для записи дефолтных headers
        const inHeaders = request.headers as Headers;
        const defaultHeaders = headers();
        keys(defaultHeaders).forEach((header) =>
          inHeaders.set(header, defaultHeaders[header] as string)
        );
      },
    ],
    afterResponse: [
      (request, options, response) => {
        if (response.status >= 400) {
          return new Response('A different response', {
            status: response.status,
          });
        }
      },
    ],
  },
});
