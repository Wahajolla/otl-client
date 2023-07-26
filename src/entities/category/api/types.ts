import { Category } from '../model/types';

export type CategoryDto = {
  id: Id;
  uuid: Uuid;
  parentId?: Id;
  name: string;
  description: string;
  priority: Priority;
  isActive: boolean;
};

export type CategoryDtoWithDetails = CategoryDto & {};

export type CategoryDetailsRequestArgs = {
  id: number;
};
