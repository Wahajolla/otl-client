import { type Category } from '../../model/types';
import { type CategoryDto } from '../types';

export function mapCategories(dtos: CategoryDto[]): Category[] {
  const categories = dtos.map((dto) => {
    return {
      id: dto.id,
      uuid: dto.uuid,
      description: dto.description,
      parentId: dto.parentId || null,
      isActive: dto.isActive,
      name: dto.name,
      priority: dto.priority,
    } as Category;
  });

  return categories;
}
