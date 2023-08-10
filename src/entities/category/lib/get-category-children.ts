import { Category } from '../model/types';

export const getCategoryChildren = (
  category: Category,
  categories: Category[]
) => {
  return categories.filter((_category) => _category.parentId === category.id);
};
