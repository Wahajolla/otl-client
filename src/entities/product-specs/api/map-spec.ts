import { Spec } from '../model/types';

import { SpecDto } from './types';

export const mapSpec = (dto: SpecDto): Spec => {
  return {
    id: dto.id,
    uuid: dto.uuid,
    values: dto.values,
  };
};
