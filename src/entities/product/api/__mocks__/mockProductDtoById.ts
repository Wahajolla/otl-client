import { ProductVariation } from '../../model/types';
import { faker } from '@faker-js/faker';
import { ProductDtoWithDetails, ProductVariationDto } from '../types';

const mockVariations = [
  {
    id: 1,

    dimension: {
      id: 1,
      volume: 2,
      volume_unit: 'mm',
      width: 2,
      height: 4,
      depth: 3,
      weight: 4,
      width_unit: 'mm',
      height_unit: 'mm',
      depth_unit: 'mm',
    },
    color: {
      id: 1,
      hex: '#44132',
      name: 'Красивый',
      ralId: '123213',
      description: 'ну такое',
    },

    price: 400,
    sku: 12321,
    stock: 4,
  },
  {
    id: 2,

    dimension: {
      id: 2,
      volume: 1,
      volume_unit: 'mm',
      width: 2,
      height: 4,
      depth: 3,
      weight: 4,
      width_unit: 'mm',
      height_unit: 'mm',
      depth_unit: 'mm',
    },
    color: {
      id: 2,
      hex: '#41432',
      name: 'Не очень красивый',
      ralId: '123213',
      description: 'ну такое',
    },

    price: 4000,
    sku: 12321,
    stock: 4,
  },
  {
    id: 3,

    dimension: {
      id: 2,
      volume: 1,
      volume_unit: 'mm',
      width: 2,
      height: 4,
      depth: 3,
      weight: 4,
      width_unit: 'mm',
      height_unit: 'mm',
      depth_unit: 'mm',
    },
    color: {
      id: 3,
      hex: '#414323',
      name: 'Ваще очень красивый',
      ralId: '123213',
      description: 'ну такое',
    },

    price: 4000,
    sku: 12321,
    stock: 4,
  },
] as ProductVariationDto[];

const mockProductWithDetails: ProductDtoWithDetails = {
  id: faker.number.int(),
  name: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  isActive: true,
  images: [faker.image.url()],
  price: faker.number.int(),
  stock: faker.number.int(),
  variations: mockVariations,
  category: {
    id: faker.number.int(),
    parentId: faker.number.int(),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    priority: 1,
    isActive: true,
  },
  manufacturer: {
    id: faker.number.int(),
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
    image: faker.image.url(),
    country: faker.location.country(),
  },
  metadata: '',
  priority: 1,
  tags: [],
};

export function mockProductWithDetailsDto(): ProductDtoWithDetails {
  return mockProductWithDetails;
}
