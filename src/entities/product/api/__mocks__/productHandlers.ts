import { rest } from 'msw';
import { ProductDtoWithDetails, ProductDto } from '../types';
import { Product, ProductWithDetails } from '../../model/types';
import { mockProductWithDetailsDto } from './mockProductDtoById';
import { config } from '@/shared/lib/config';

export const productsHandlers = [
  rest.get(`http://localhost:3000/api/product/:id`, (_req, res, ctx) => {
    return res(ctx.json<ProductDtoWithDetails>(mockProductWithDetailsDto()));
  }),
];
