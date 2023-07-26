import { setupServer } from 'msw/node';
import { productsHandlers } from '@/entities/product/api/__mocks__/productHandlers';
import { categoryHandlers } from '@/entities/category/api/__mocks__/categoryHandlers';

export const server = setupServer(...productsHandlers, ...categoryHandlers);
