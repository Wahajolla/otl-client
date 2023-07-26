import { setupWorker } from 'msw';
import { productsHandlers } from '@/entities/product/api/__mocks__/productHandlers';
import { categoryHandlers } from '@/entities/category/api/__mocks__/categoryHandlers';

export const worker = setupWorker(...productsHandlers, ...categoryHandlers);
