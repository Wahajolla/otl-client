export {
  categoryApi,
  useSearchCategoriesQuery,
  useLazySearchCategoriesQuery,
  useGetCategoryByIdQuery,
} from './api/categoryApi';
export { categorySlice } from './model/slice';
export { CategoryItem } from './ui/CategoryItem/CategoryItem';
export type { Category } from './model/types';
export { mapCategoriesToTree } from './lib/mapCategoriesToTree';
