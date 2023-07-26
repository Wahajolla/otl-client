import { faker } from '@faker-js/faker';
import { CategoryDto } from '../types';

const mockCategory: CategoryDto = {
  id: 1,
  uuid: 'vodostochnye-sistemy',
  name: 'Водосточные системы',
  description: 'Водосточные системы',
  isActive: true,
  priority: 1,
};

export function mockCategoryDtoByUuid(): CategoryDto {
  return mockCategory;
}
