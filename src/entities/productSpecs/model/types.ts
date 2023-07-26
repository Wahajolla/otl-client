export type SpecName = 'dimension' | 'color' | 'generic';
export type Spec = GenericSpec | Color | Dimension;

export type NamedSpec = { spec_name: SpecName; spec: Spec };
export type NamedSpecs = { spec_name: SpecName; specs: Spec[] };

export type GenericSpec = {
  id: Id;
  spec_name: SpecName;
  values?: string[];
};

export type Color = GenericSpec & {
  hex: string;
  name: string;
  ralId: string;
  description: string;
};

export type Dimension = GenericSpec & {
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
