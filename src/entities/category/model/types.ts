// import type { Product } from '@/entities/product/@x/category';

export type CategoryId = Brand<Id, 'CategoryId'>;

export type Category = {
  id: Id;
  children?: Category[];
  parentId?: Id;
  name: string;
  description: string;
  priority: Priority;
  isActive: boolean;
};

// export type CategoryWithProducts = Category & {
//   products: Product[];
// };
