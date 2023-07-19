import { setupWorker } from 'msw';
import { productsHandlers } from '@/entities/product/api/__mocks__/productHandlers';

export const worker = setupWorker(...productsHandlers);
