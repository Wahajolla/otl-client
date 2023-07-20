export interface ProductSpecs {
  dimension: Dimension;
  color: Color;
}

export type ProductSpecsVariants = {
  id: Id;
  name: ProductSpecsNames;
  value: Dimension | Color | GenericProductSpec;
};

export type GenericProductSpec = {
  id: Id;
};

export type ProductSpecsNames = 'dimension' | 'color' | 'generic';

export type Color = GenericProductSpec & {
  hex: string;
  name: string;
  ralId: string;
  description: string;
};

export type Dimension = GenericProductSpec & {
  volume: number;
  volume_unit: string;
  width: number;
  height: number;
  depth: number;
  weight: number;
  width_unit: string;
  height_unit: string;
  depth_unit: string;
};
