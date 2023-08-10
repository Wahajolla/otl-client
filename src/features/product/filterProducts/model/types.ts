import { FilterCollection, FilterCollectionValue } from '@/entities/filter';
import { Manufacturer } from '@/entities/manufacturer';
import { Color } from '@/entities/product-specs';

export type ManufacturerFilterValue = FilterCollectionValue & Manufacturer;
export type ManufacturerFilterCollection =
  FilterCollection<ManufacturerFilterValue>;

export type ColorFilterValue = FilterCollectionValue & Color;
export type ColorFilterCollection = FilterCollection<ColorFilterValue>;
