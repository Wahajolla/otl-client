import { type Category } from '../../model/types';
import { type CategoryDto } from '../types';

export function mapCategory(dto: CategoryDto): Category {
  return {
    id: dto.id,
    uuid: dto.uuid,
    name: dto.name,
    description: dto.description,
    priority: dto.priority,
    isActive: dto.isActive,
    parentId: dto.parentId || null,
  };
}
