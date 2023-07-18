import { type ProductDtoWithDetails } from '../api/types';
import { type ProductWithDetails } from '../model/types';

import { mapSeoTag } from '@/entities/seo-tag/@x/product';

export function mapProductDetails(
  dto: ProductDtoWithDetails
): ProductWithDetails {
  return {
    id: dto.id,
    name: dto.name,
    price: dto.price,
    stock: dto.stock,
    images: dto.images,
    category: null,
    description: dto.description,
    isActive: dto.isActive,
    manufacturer: null,
    metadata: dto.metadata,
    priority: dto.priority,
    tags: dto.tags.map((tag) => mapSeoTag(tag)),
    variations: [],
  } as ProductWithDetails;
}
