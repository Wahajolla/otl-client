import { CategoryWithDetails, type Category } from '../../model/types';
import { CategoryDtoWithDetails, type CategoryDto } from '../types';

import { mapCategories } from './map-categories';

import { mapFilters } from '@/entities/filter/@x/category';

export function mapCategoryDetails(
  dto: CategoryDtoWithDetails
): CategoryWithDetails {
  return {
    id: dto.id,
    uuid: dto.uuid,
    name: dto.name,
    parentId: dto.parentId || null,
    description: dto.description,
    priority: dto.priority,
    children: (dto.children && mapCategories(dto.children)) || [],
    path: (dto.path && mapCategories(dto.path)) || [],
    sortable: (dto.availableFilter && dto.availableFilter?.length > 0) || true,
    isActive: dto.isActive,
    availableFilters:
      (dto.availableFilter && mapFilters(dto.availableFilter)) || [],
  };
}
