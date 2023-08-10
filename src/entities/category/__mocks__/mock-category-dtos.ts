import { faker } from '@faker-js/faker';

import { CategoryDto, CategoryDtoWithDetails } from '../api/types';

import { CombinedFilterDto } from '@/entities/filter/@x/category';
import { FilterCollectionValueDto } from '@/entities/filter/api/types';

// export type FilterRangeDto = FilterDto & {
//   filterType: Extract<FilterType, 'range'>;
//   minValue: number;
//   minSelectedValue: number;
//   maxValue: number;
//   maxSelectedValue: number;
//   unit: string;
// };

// export type FilterDto = {
//   id: SpecId;
//   type: SpecUuid;
//   filterType: FilterType;
//   label: string;
// };

const filters: CombinedFilterDto[] = [
  {
    id: 1,
    type: 'dimensionWidth',
    filterType: 'range',
    label: 'Ширина',
    maxSelectedValue: 10000,
    maxValue: 10000,
    minSelectedValue: 1,
    minValue: 1,
    unit: 'мм',
  },
  {
    id: 2,
    type: 'brand',
    filterType: 'collection',
    label: 'Производитель',
    values: [
      {
        filterType: 'boolean',
        id: 1,
        isActive: true,
        isSelected: false,
        label: 'НЛМК',
        type: 'brand',
      } as FilterCollectionValueDto,
      {
        filterType: 'boolean',
        id: 2,
        isActive: true,
        isSelected: false,
        label: 'СталиСпалы',
        type: 'brand',
      } as FilterCollectionValueDto,
    ],
  },
];

const mockCategories: CategoryDtoWithDetails[] = [
  {
    id: 1,
    uuid: 'vodostochnye-sistemy',
    name: 'Водосточные системы',
    description: 'Водосточные системы',
    isActive: true,
    availableFilter: filters,
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
    uuid: 'vodostochnye-sistemy-child-1',
    parentId: 1,
    name: 'Дочерняя категория 1 - водосточные системы',
    description: 'Классное описание',
    isActive: true,
    priority: 1,
  },
  {
    id: 6,
    uuid: 'vodostochnye-sistemy-child-2',
    parentId: 1,
    name: 'Дочерняя категория 2 - водосточные системы',
    description: 'Дочерняя категория 2 - Водосточные системы',
    isActive: true,
    priority: 1,
  },
  {
    id: 7,
    uuid: 'vodostochnye-sistemy-sub-child-1',
    parentId: 6,
    name: 'СубДочерняя категория 1 - водосточные системы',
    description: 'СубДочерняя категория 2 - Водосточные системы',
    isActive: true,
    priority: 1,
  },
  {
    id: 8,
    uuid: 'vodostochnye-sistemy-sub-child-2',
    parentId: 5,
    name: 'СубДочерняя категория 2 - водосточные системы',
    description: 'СубДочерняя категория 3 - Водосточные системы',
    isActive: true,
    priority: 1,
  },
];

export function mockCategoriesDto(): CategoryDto[] {
  return mockCategories;
}

export function mockCategoriesDetailsDto(): CategoryDtoWithDetails[] {
  return mockCategories;
}
