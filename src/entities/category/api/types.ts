import { Category } from '../model/types';

export type CategoryDto = {
  id: Id;
  parentId: Id;
  name: string;
  description: string;
  priority: Priority;
  isActive: boolean;
};

export type CategoryDtoWithDetails = CategoryDto & {};

export type CategoryDetailsRequestArgs = {
  id: number;
};
