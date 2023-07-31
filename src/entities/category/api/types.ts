export type CategoryDtoWithDetails = CategoryDto & {
  children: CategoryDto[];
  backtree: CategoryDto[];
};

export type CategoryDto = {
  id: Id;
  uuid: Uuid;
  parentId?: Id;
  name: string;
  description: string;
  priority: Priority;
  isActive: boolean;
};

export type CategoryDetailsRequestArgs = {
  id: number;
};
