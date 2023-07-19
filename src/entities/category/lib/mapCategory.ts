import { type CategoryDto } from '../api/types';
import { type Category } from '../model/types';

export function mapCategory(dto: CategoryDto): Category {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    priority: dto.priority,
    isActive: dto.isActive,
  };
}
