/* eslint-disable @typescript-eslint/naming-convention */
export type DimensionDto = {
  id: number;
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

export interface ColorDto {
  id: Id;
  hex: string;
  name: string;
  ralId: string;
  description: string;
}
