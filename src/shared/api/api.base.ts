/* eslint-disable @typescript-eslint/no-explicit-any */
import { keys } from 'lodash';
import wretch from 'wretch';

/** Базовый URL */
export const baseURL = process.env.BACKEND_URL;

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
export const API = wretch(baseURL).options({ credentials: "include", mode: "cors" });
