export interface Color {
  hex: string;
  name: string;
  railId: string;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  parentId: number;
  description: string;
  priceMultiplier: number;
}

export interface Product {
  id: number;
  productName: string;
  dimensions: string;
  dimensionsRange: string;
  description: string;
  price: number;
  currentStock: number;
  categoryId: number;
  colors: Color[];
  category: Category;
}
