
import { ProductVariationDto, type ProductDtoWithDetails } from '../api/types';
import { ProductVariation, type ProductWithDetails } from '../model/types';

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
    category: {
      id: 1,
      uuid: 'vodostochnye-sistemy',
      name: 'Водосточные системы',
      description: 'Водосточные системы',
      isActive: true,
      priority: 1,
    },
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
        ? dto.variations.map((v) => mapProductVariations(v))
        : [],
  } as ProductWithDetails;
}
function mapProductVariations(dto: ProductVariationDto): ProductVariation {
  return {
    id: dto.id,
    price: dto.price,
    sku: dto.sku,
    specs: [
      {
        ...dto.dimension,
        uniqueName: 'dimension',
      },
      {
        ...dto.color,
        uniqueName: 'color',
      },
    ],
    stock: dto.stock,
  };
}
