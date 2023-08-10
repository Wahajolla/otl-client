import {
  CombinedFilter,
  FilterBoolean,
  FilterCollection,
  FilterCollectionValue,
  FilterRange,
} from '../model/types';

import {
  CombinedFilterDto,
  FilterBooleanDto,
  FilterCollectionDto,
  FilterCollectionValueDto,
  FilterRangeDto,
} from './types';

const mapFilterBoolean = (dto: FilterBooleanDto): FilterBoolean => {
  return {
    id: dto.id,
    type: dto.type,
    filterType: 'boolean',
    isActive: dto.isActive,
    isSelected: dto.isSelected,
    label: dto.label,
  };
};

const mapFilterRange = (dto: FilterRangeDto): FilterRange => {
  return {
    id: dto.id,
    type: dto.type,
    filterType: 'range',
    maxSelectedValue: dto.maxSelectedValue,
    maxValue: dto.maxValue,
    minSelectedValue: dto.minSelectedValue,
    minValue: dto.minValue,
    unit: dto.unit,
    label: dto.label,
  };
};

const mapFilterCollection = <
  T1 extends unknown = FilterCollectionValueDto,
  T2 extends unknown = FilterCollectionValue
>(
  dto: FilterCollectionDto<T1>
): FilterCollection<T2> => {
  return {
    id: dto.id,
    type: dto.type,
    filterType: 'collection',
    values: dto.values as unknown as T2[],
    label: dto.label,
  };
};

export const mapFilters = (dtos: CombinedFilterDto[]): CombinedFilter[] => {
  const filters = dtos.map((e) => {
    switch (e.filterType) {
      case 'boolean':
        return mapFilterBoolean(e as FilterBooleanDto);
      case 'range':
        return mapFilterRange(e as FilterRangeDto);
      case 'collection':
        return mapFilterCollection(e as FilterCollectionDto<unknown>);
    }
  });
  return filters;
};
