/* eslint-disable @typescript-eslint/naming-convention */
import { faker } from '@faker-js/faker';

import { ProductDtoWithDetails, ProductVariationDto } from '../api/types';
import { ProductVariation } from '../model/types';

const mockVariations = [
  {
    id: 1,
    specs: [
      {
        id: 1,
        type: 'RANGE',
        uuid: 'dimension',
        values: [
          {
            name: 'id',
            value: 1,
          },
          {
            name: 'volume',
            value: 200,
          },
          {
            name: 'volume_unit',
            value: 'mm^3',
          },
          {
            name: 'width',
            value: 200,
          },
          {
            name: 'width_unit',
            value: 'mm',
          },
          {
            name: 'height',
            value: 200,
          },
          {
            name: 'height_unit',
            value: 'mm',
          },
          {
            name: 'depth',
            value: 200,
          },
          {
            name: 'depth_unit',
            value: 'mm',
          },
        ],
      },
      {
        id: 2,
        type: 'SELECTION',
        uuid: 'color',
        values: [
          {
            name: 'id',
            value: 1,
          },
          {
            name: 'hex',
            value: '#ff0000',
          },
          {
            name: 'name',
            value: 'Красивый',
          },
          {
            name: 'description',
            value: 'ну такое',
          },
          {
            name: 'ralId',
            value: 5555,
          },
        ],
      },
    ],
    price: 400,
    sku: 324,
    stock: 4,
  },
  {
    id: 2,
    specs: [
      {
        id: 1,
        type: 'RANGE',
        uuid: 'dimension',
        values: [
          {
            name: 'id',
            value: 2,
          },
          {
            name: 'volume',
            value: 200,
          },
          {
            name: 'volume_unit',
            value: 'mm^3',
          },
          {
            name: 'width',
            value: 200,
          },
          {
            name: 'width_unit',
            value: 'mm',
          },
          {
            name: 'height',
            value: 200,
          },
          {
            name: 'height_unit',
            value: 'mm',
          },
          {
            name: 'depth',
            value: 200,
          },
          {
            name: 'depth_unit',
            value: 'mm',
          },
        ],
      },
      {
        id: 2,
        type: 'SELECTION',
        uuid: 'color',
        values: [
          {
            name: 'id',
            value: 2,
          },
          {
            name: 'hex',
            value: '#bd3a3a',
          },
          {
            name: 'name',
            value: 'Не очень красивый',
          },
          {
            name: 'description',
            value: 'ну такое',
          },
          {
            name: 'ralId',
            value: 4444,
          },
        ],
      },
    ],
    price: 4000,
    sku: 331,
    stock: 4,
  },
] as ProductVariationDto[];

export function mockProductDtoByUuid(): ProductDtoWithDetails {
  return {
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
}
