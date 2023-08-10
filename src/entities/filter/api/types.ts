import { FilterType } from '../model/types';

import { SpecId, SpecUuid } from '@/entities/product-specs/@x/filter';

export type FilterRangeDto = FilterDto & {
  filterType: Extract<FilterType, 'range'>;
  minValue: number;
  minSelectedValue: number;
  maxValue: number;
  maxSelectedValue: number;
  unit: string;
};

export type FilterDto = {
  id: SpecId;
  type: SpecUuid;
  filterType: FilterType;
  label: string;
};

export type FilterCollectionValueDto = FilterDto & {
  isActive: boolean;
  isSelected: boolean;
};

export type FilterCollectionDto<T extends unknown = FilterCollectionValueDto> =
  FilterDto & {
    filterType: Extract<FilterType, 'collection'>;
    values: T[];
  };

export type FilterBooleanDto = FilterDto & {
  filterType: Extract<FilterType, 'boolean'>;
  isActive: boolean;
  isSelected: boolean;
};

export type CombinedFilterDto =
  | FilterRangeDto
  | FilterCollectionDto<unknown>
  | FilterBooleanDto;
