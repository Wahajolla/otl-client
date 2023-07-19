import { type CategoryDto } from '../api/types';
import { type Category } from '../model/types';

export function mapCategories(dtos: CategoryDto[]): Category[] {
  const categories = dtos.map((dto) => {
    return {
      id: dto.id,
      description: dto.description,
      isActive: dto.isActive,
      name: dto.name,
      priority: dto.priority,
    } as Category;
  });

  const categoriesWithChildren = categories.map((category) => {
    return {
      ...category,
      children: categories.filter((e) => e.parentId === category.id),
    } as Category;
  });

  return categoriesWithChildren;
}
