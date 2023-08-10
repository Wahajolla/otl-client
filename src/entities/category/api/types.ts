import { CombinedFilter } from '@/entities/filter/@x/category';
import { SpecDto } from '@/entities/product-specs/api/types';

export type CategoryDtoWithDetails = CategoryDto & {
  children?: CategoryDto[];
  availableFilter?: CombinedFilter[];
  path?: CategoryDto[];
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
