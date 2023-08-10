import { CombinedFilter } from '@/entities/filter/@x/category';

export type CategoryWithDetails = Category & {
  sortable: boolean;
  children: Category[];
  path: Category[];
  availableFilters: CombinedFilter[];
};

export type CategoryTree = Category & {
  treeChildren: CategoryTree[];
};

// import type { Product } from '@/entities/product/@x/category';
export type CategoryId = Brand<Id, 'CategoryId'>;

export type Category = {
  id: Id;
  uuid: Uuid;
  parentId: Id | null;
  name: string;
  description: string;
  priority: Priority;
  isActive: boolean;
};
