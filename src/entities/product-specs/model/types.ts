export type SpecUuid = Uuid;
export type SpecId = Id;

export type Spec = {
  id: SpecId;
  uuid: SpecUuid;
  values: { name: string; value: string | number }[];
};

export type NamedSpecs = { uuid: SpecUuid; specs: Spec[] };

export type NamedSpec = { uuid: SpecUuid; spec: Spec };

export type Dimension = Spec & {
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

export type Color = Spec & {
  hex: string;
  name: string;
  ralId: string;
  description: string;
};
