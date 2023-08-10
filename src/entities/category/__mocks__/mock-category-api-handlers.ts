import { rest } from 'msw';

import { CategoryDto, CategoryDtoWithDetails } from '../api/types';
import { Category } from '../model/types';

import { mockCategoryDetailsDtoByUuid } from './mock-category-details-dto-by-uuid';
import { mockCategoriesDto } from './mock-category-dtos';

import { config } from '@/shared/lib/config';

export const handlers = [
  rest.get(`${config.BACKEND_URL}/categories/:uuid`, (_req, res, ctx) => {
    const { uuid } = _req.params;
    // if (isNaN(+id)) {
    //   return res(
    //     ctx.status(403),

    //     ctx.json({
    //       errorMessage: `Category '${_req.id}' not found`,
    //     })
    //   );
    // }
    return res(
      ctx.json<CategoryDto>(mockCategoryDetailsDtoByUuid(uuid.toString()))
    );
  }),

  rest.get(`${config.BACKEND_URL}/categories`, (_req, res, ctx) => {
    return res(ctx.json<CategoryDto[]>(mockCategoriesDto()));
  }),
];
