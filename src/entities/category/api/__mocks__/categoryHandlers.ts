import { rest } from 'msw';
import { CategoryDto, CategoryDtoWithDetails } from '../types';
import { Category } from '../../model/types';
import { mockCategoryDtoByUuid } from './mockCategoryDtoByUuid';
import { config } from '@/shared/lib/config';
import { mockCategoriesDto } from './mockCategoriesDto';

export const categoryHandlers = [
  rest.get(`${config.BACKEND_URL}/categories/:uuid`, (_req, res, ctx) => {
    // const { id } = _req.params;
    // if (isNaN(+id)) {
    //   return res(
    //     ctx.status(403),

    //     ctx.json({
    //       errorMessage: `Category '${_req.id}' not found`,
    //     })
    //   );
    // }
    return res(ctx.json<CategoryDto>(mockCategoryDtoByUuid()));
  }),

  rest.get(`${config.BACKEND_URL}/categories`, (_req, res, ctx) => {
    return res(ctx.json<CategoryDto[]>(mockCategoriesDto()));
  }),
];
