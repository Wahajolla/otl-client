import { type CategoryDto } from '../api/types';
import { CategoryId, type Category, type CategoryTree } from '../model/types';

export function mapCategoriesToTree(
  flatCategories: Category[],
  onlyRoot: boolean = true
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

  const mapCategories = flatCategories.reduce((trees, category) => {
    if (!trees[category.id]) {
      trees[category.id] = { ...category, treeChildren: [] };
    }
    if (category.parentId && trees[category.parentId]) {
      trees[category!.parentId]!.treeChildren?.push(trees[category.id]);
    }
    return trees;
  }, {} as Record<CategoryId, CategoryTree>);

  return onlyRoot
    ? Object.values(mapCategories).filter((c) => c.parentId == undefined)
    : Object.values(mapCategories).filter(
        (c) => c.parentId && !mapCategories[c.parentId]
      );
}
