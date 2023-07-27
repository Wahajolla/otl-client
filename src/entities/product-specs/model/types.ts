export type SpecName = 'dimension' | 'color' | 'generic';
export type Spec = GenericSpec | Color | Dimension;

export type NamedSpecs = { uniqueName: SpecName; specs: Spec[] };
export type NamedSpec = { uniqueName: SpecName; spec: Spec };

export type GenericSpec = {
  id: Id;
  uniqueName: SpecName;
  values?: string[];
};

export type Dimension = GenericSpec & {
  volume: number;
  volumeUnit: string;
  width: number;
  height: number;
  depth: number;
  weight: number;
  widthUnit: string;
  heightUnit: string;
  depthUnit: string;
};

export type Color = GenericSpec & {
  hex: string;
  name: string;
  ralId: string;
  description: string;
};
