import { type Product } from '../../model/types';
import { type ProductDto } from '../types';

export function mapProduct(dto: ProductDto): Product {
  return {
    id: dto.id,
    uuid: dto.uuid,
    name: dto.name,
    price: dto.price,
    stock: dto.stock,
    image: dto.images[0] ?? null,
  };
}
