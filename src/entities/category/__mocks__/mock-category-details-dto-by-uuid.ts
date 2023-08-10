import { faker } from '@faker-js/faker';

import { CategoryDtoWithDetails } from '../api/types';

import { mockCategoriesDetailsDto } from './mock-category-dtos';

export function mockCategoryDetailsDtoByUuid(
  uuid: Uuid
): CategoryDtoWithDetails {
  return mockCategoriesDetailsDto().find((a) => a.uuid === uuid)!;
}
