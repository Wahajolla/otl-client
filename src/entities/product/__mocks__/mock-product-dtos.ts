import { ProductDtoWithDetails } from '../api/types';

import { mockProductDtoByUuid } from './mock-product-dto-by-uuid';

export function mockProductDtos(): ProductDtoWithDetails[] {
  return [
    mockProductDtoByUuid(),
    mockProductDtoByUuid(),
    mockProductDtoByUuid(),
    mockProductDtoByUuid(),
    mockProductDtoByUuid(),
  ];
}
