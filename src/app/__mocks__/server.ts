import { setupServer } from 'msw/node';
import { productsHandlers } from '@/entities/product/api/__mocks__/productHandlers';

export const server = setupServer(...productsHandlers);
