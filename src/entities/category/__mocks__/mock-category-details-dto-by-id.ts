import { faker } from '@faker-js/faker';

import { CategoryDto } from '../api/types';

const mockCategory: CategoryDto = {
  id: 1,
  name: faker.commerce.product(),
  uuid: 'test-category',
  description: faker.commerce.productDescription(),
  isActive: true,
  priority: 1,
};

export function mockCategoryDtoById(): CategoryDto {
  return mockCategory;
}
