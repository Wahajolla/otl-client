import { ProductVariation } from '../../model/types';
import { faker } from '@faker-js/faker';
import { ProductDtoWithDetails, ProductVariationDto } from '../types';

const mockVariations = [
  {
    id: 1,

    dimension: {
      id: 1,
      volume: 200,
      volume_unit: 'mm',
      width: 12,
      height: 24,
      depth: 34,
      weight: 45,
      width_unit: 'mm',
      height_unit: 'mm',
      depth_unit: 'mm',
    },
    color: {
      id: 1,
      hex: '#ff0000',
      name: 'Красивый',
      ralId: '5555',
      description: 'ну такое',
    },

    price: 400,
    sku: 324,
    stock: 4,
  },
  {
    id: 2,

    dimension: {
      id: 2,
      volume: 1,
      volume_unit: 'm',
      width: 2,
      height: 4,
      depth: 3,
      weight: 4,
      width_unit: 'm',
      height_unit: 'm',
      depth_unit: 'm',
    },
    color: {
      id: 2,
      hex: '#bd3a3a',
      name: 'Не очень красивый',
      ralId: '4444',
      description: 'ну такое',
    },

    price: 4000,
    sku: 331,
    stock: 4,
  },
  {
    id: 3,
    dimension: {
      id: 2,
      volume: 1,
      volume_unit: 'm',
      width: 2,
      height: 4,
      depth: 3,
      weight: 4,
      width_unit: 'm',
      height_unit: 'm',
      depth_unit: 'm',
    },
    color: {
      id: 3,
      hex: '#34b353',
      name: 'Ваще очень красивый',
      ralId: '12355213',
      description: 'ну такое',
    },

    price: 4000,
    sku: 113,
    stock: 4,
  },
] as ProductVariationDto[];

const mockProductWithDetails: ProductDtoWithDetails = {
  id: faker.number.int(),
  uuid: 'test-product',
  name: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  isActive: true,
  images: [faker.image.urlLoremFlickr()],
  price: faker.number.int(),
  stock: faker.number.int(),
  variations: mockVariations,
  category: {
    id: faker.number.int(),
    uuid: 'test-category',
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
    image: faker.image.urlLoremFlickr(),
    country: faker.location.country(),
  },
  metadata: '',
  priority: 1,
  tags: [],
};

export function mockProductDtoByUuid(): ProductDtoWithDetails {
  return mockProductWithDetails;
}
