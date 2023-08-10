import { ProductVariation, type ProductWithDetails } from '../../model/types';
import { ProductVariationDto, type ProductDtoWithDetails } from '../types';

import { mapSpec } from '@/entities/product-specs';
import { mapSeoTag } from '@/entities/seo-tag/@x/product';

export function mapProductDetails(
  dto: ProductDtoWithDetails
): ProductWithDetails {
  return {
    id: dto.id,
    uuid: dto.uuid,
    name: dto.name,
    price: dto.price || null,
    stock: dto.stock || null,
    images: dto.images || [],
    image: dto.images[0] || null,
    category: dto.category,
    description: dto.description || null,
    isActive: dto.isActive || true,
    manufacturer: dto.manufacturer || null,
    metadata: dto.metadata || null,
    priority: dto.priority || null,
    tags:
      dto.tags && dto.tags.length > 0
        ? dto.tags.map((tag) => mapSeoTag(tag))
        : [],
    variations:
      dto.variations && dto.variations.length > 0
        ? dto.variations.map((v) => mapProductVariation(v))
        : [],
  } as ProductWithDetails;
}
function mapProductVariation(dto: ProductVariationDto): ProductVariation {
  return {
    id: dto.id,
    price: dto.price,
    sku: dto.sku,
    specs: dto.specs.map(mapSpec),
    stock: dto.stock,
  };
}
