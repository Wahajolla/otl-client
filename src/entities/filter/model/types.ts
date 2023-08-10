import { SpecId, SpecUuid } from '@/entities/product-specs/@x/filter';

export type FilterType = 'range' | 'collection' | 'boolean';

export type FilterRange = Filter & {
  filterType: Extract<FilterType, 'range'>;
  minValue: number;
  minSelectedValue: number;
  maxValue: number;
  maxSelectedValue: number;
  unit: string;
};

export type FilterCollectionValue = Filter & {
  isActive: boolean;
  isSelected: boolean;
};

export type FilterCollection<T extends unknown = FilterCollectionValue> =
  Filter & {
    filterType: Extract<FilterType, 'collection'>;
    values: T[];
  };

export type FilterBoolean = Filter & {
  filterType: Extract<FilterType, 'boolean'>;
  isActive: boolean;
  isSelected: boolean;
};

export type Filter = {
  id: SpecId;
  type: SpecUuid;
  filterType: FilterType;
  label: string;
};

export type CombinedFilter =
  | FilterRange
  | FilterCollection<unknown>
  | FilterBoolean;
