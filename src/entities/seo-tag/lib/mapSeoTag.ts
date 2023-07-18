import { type SeoTagDto } from '../api/types';
import { type SeoTag } from '../model/types';

export function mapSeoTag(dto: SeoTagDto): SeoTag {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
  };
}
