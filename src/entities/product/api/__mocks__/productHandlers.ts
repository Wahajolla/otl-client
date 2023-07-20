import { rest } from 'msw';
import { ProductDtoWithDetails, ProductDto } from '../types';
import { Product, ProductWithDetails } from '../../model/types';
import { mockProductWithDetailsDto } from './mockProductDtoById';
import { config } from '@/shared/lib/config';

export const productsHandlers = [
  rest.get(`${config.BACKEND_URL}/products/*`, (_req, res, ctx) => {
    return res(ctx.json<ProductDtoWithDetails>(mockProductWithDetailsDto()));
  }),
];
