import { faker } from '@faker-js/faker';

import { CategoryDto } from '../api/types';

const mockCategories: CategoryDto[] = [
  {
    id: 1,
    uuid: 'vodostochnye-sistemy',
    name: 'Водосточные системы',
    description: 'Водосточные системы',
    isActive: true,
    priority: 1,
  },
  {
    id: 2,
    name: 'Фасонные элементы',
    uuid: 'fasonnye-elementy',
    description: 'Фасонные элементы',
    isActive: true,
    priority: 1,
  },
  {
    id: 3,
    name: 'Дымники и колпаки',
    uuid: 'dymniki-i-kolpaki',
    description: 'Дымники и колпаки',
    isActive: true,
    priority: 1,
  },
  {
    id: 4,
    name: 'Кровельные материалы',
    uuid: 'krovelnye-materialy',
    description: 'Кровельные материалы',
    isActive: true,
    priority: 1,
  },
];

export function mockCategoriesDto(): CategoryDto[] {
  return mockCategories;
}
