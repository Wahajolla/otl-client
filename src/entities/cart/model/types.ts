import {
  Product,
  ProductVariation,
  ProductVariationId,
} from '@/entities/product/@x/cart';

export type CartItem = {
  product: Product;
  productVariation: ProductVariation;
  quantity: number;
};

export type Cart = {
  itemsMap: Record<ProductVariationId, CartItem>;
  version: number;
};
