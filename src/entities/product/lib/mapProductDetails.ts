import { type ProductDtoWithDetails } from '../api/types';
import { type ProductWithDetails } from '../model/types';

import { mapSeoTag } from '@/entities/seo-tag/@x/product';

export function mapProductDetails(
  dto: ProductDtoWithDetails
): ProductWithDetails {
  return {
    id: dto.id,
    name: dto.name,
    price: dto.price || null,
    stock: dto.stock || null,
    images: dto.images || [],
    image: dto.images[0] || null,
    category: null,
    description: dto.description || null,
    isActive: dto.isActive || true,
    manufacturer: null,
    metadata: dto.metadata || null,
    priority: dto.priority || null,
    tags:
      dto.tags && dto.tags.length > 0
        ? dto.tags.map((tag) => mapSeoTag(tag))
        : [],
    variations: [],
  } as ProductWithDetails;
}
