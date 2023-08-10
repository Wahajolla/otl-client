import { Category } from '../model/types';

export const getCategoryPath = (category: Category, categories: Category[]) => {
  const path: Category[] = [];

  const getPath = (category?: Category) => {
    if (category) {
      path.push(category);

      if (category.parentId)
        getPath(
          categories.find((_category) => _category.id === category.parentId)
        );
    }
  };
  getPath(category);
  return path.reverse().slice(0, path.length - 1);
};
