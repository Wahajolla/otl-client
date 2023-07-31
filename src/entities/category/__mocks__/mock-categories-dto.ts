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
  {
    id: 5,
    uuid: 'vodostochnye-sistemy',
    parentId: 1,
    name: 'Дочерняя категория 1 - водосточные системы',
    description: 'Дочерняя категория 1 - Водосточные системы',
    isActive: true,
    priority: 1,
  },
  {
    id: 6,
    uuid: 'vodostochnye-sistemy',
    parentId: 1,
    name: 'Дочерняя категория 2 - водосточные системы',
    description: 'Дочерняя категория 2 - Водосточные системы',
    isActive: true,
    priority: 1,
  },
  {
    id: 7,
    uuid: 'vodostochnye-sistemy',
    parentId: 6,
    name: 'СубДочерняя категория 2 - водосточные системы',
    description: 'СубДочерняя категория 2 - Водосточные системы',
    isActive: true,
    priority: 1,
  },
  {
    id: 8,
    uuid: 'vodostochnye-sistemy',
    parentId: 5,
    name: 'СубДочерняя категория 3 - водосточные системы',
    description: 'СубДочерняя категория 3 - Водосточные системы',
    isActive: true,
    priority: 1,
  },
];

export function mockCategoriesDto(): CategoryDto[] {
  return mockCategories;
}
