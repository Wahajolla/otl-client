import { handlers } from './mock-category-api-handlers';
import { mockCategoryDtoById } from './mock-category-details-dto-by-id';
import { mockCategoryDetailsDtoByUuid } from './mock-category-details-dto-by-uuid';
import { mockCategoriesDto } from './mock-category-dtos';
import {} from './mock-category-dto';

export const _mockCategory_ = {
  handlers,
  mockCategoriesDto,
  mockCategoryDtoById,
  mockCategoryDtoByUuid: mockCategoryDetailsDtoByUuid,
};
