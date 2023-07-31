import { CategoryDtoWithDetails, type CategoryDto } from '../api/types';
import { CategoryWithDetails, type Category } from '../model/types';

export function mapCategoryDetails(
  dto: CategoryDtoWithDetails
): CategoryWithDetails {
  return {
    id: dto.id,
    uuid: dto.uuid,
    name: dto.name,
    description: dto.description,
    priority: dto.priority,
    children: dto.children || [],
    backtree: dto.backtree || [],
    sortable: dto.children?.length === 0 || true,
    isActive: dto.isActive,
  };
}
