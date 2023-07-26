import { type CategoryDto } from '../api/types';
import { CategoryId, type Category, type CategoryTree } from '../model/types';

export function mapCategoriesToTree(
  flatCategories: Category[]
): CategoryTree[] {
  //   const sortedFlatCategories = flatCategories.sort((a, b) => {
  //     let _a = a.parentId;
  //     let _b = b.parentId;
  //     if (_a == undefined) {
  //       _a = -1;
  //     }
  //     if (_b == undefined) {
  //       _b = -1;
  //     }
  //     return _a < _b ? 1 : -1;
  //   });

  const mapCategoriesToTree = flatCategories.reduce((trees, category) => {
    if (!trees[category.id]) {
      trees[category.id] = { ...category, children: [] };
    }
    if (category.parentId && trees[category.parentId]) {
      trees[category!.parentId]!.children?.push(trees[category.id]);
    }
    return trees;
  }, {} as Record<CategoryId, CategoryTree>);

  return Object.values(mapCategoriesToTree).filter(
    (c) => c.parentId == undefined
  );
}
