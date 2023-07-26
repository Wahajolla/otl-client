import { rest } from 'msw';
import { ProductDtoWithDetails, ProductDto } from '../types';
import { Product, ProductWithDetails } from '../../model/types';
import { mockProductDtoByUuid } from './mockProductDtoByUuid';
import { config } from '@/shared/lib/config';

export const productsHandlers = [
  rest.get(`${config.BACKEND_URL}/products/:uuid`, (_req, res, ctx) => {
    // const { id } = _req.params;
    // if (isNaN(+id)) {
    //   return res(
    //     ctx.status(403),

    //     ctx.json({
    //       errorMessage: `Product '${_req.id}' not found`,
    //     })
    //   );
    // }
    return res(ctx.json<ProductDtoWithDetails>(mockProductDtoByUuid()));
  }),

  rest.get(`${config.BACKEND_URL}/products`, (_req, res, ctx) => {
    return res(ctx.json<ProductDtoWithDetails[]>([mockProductDtoByUuid()]));
  }),
];
