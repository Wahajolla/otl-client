/* eslint-disable @typescript-eslint/naming-convention */
export type SpecDto = {
  id: Id;
  uuid: Uuid;
  values: { name: string; value: string | number }[];
};

export type DimensionDto = SpecDto & {
  id: Id;
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

export type ColorDto = SpecDto & {
  id: Id;
  hex: string;
  name: string;
  ralId: string;
  description: string;
};
