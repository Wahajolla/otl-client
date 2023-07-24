import { ProductWithDetails } from '@/entities/product';

type Props = {
  product: ProductWithDetails;
};

function ProductDetails({ product }: Props) {
  return (
    <div>
      <h3>{'Описание'}</h3>
      <p>{product?.description}</p>
    </div>
  );
}

export { ProductDetails };
