import Link from 'next/link';
import { FC } from 'react';
import { Card } from '@/shared/ui/Card/Card';

import { Product } from '../../model/types';

interface Props {
  product: Product;
  actionSlot?: React.ReactNode;
  bottomContentSlot?: React.ReactNode;
  size?: 's' | 'm';
}
const ProductCard: FC<Props> = ({ product, actionSlot }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Card>
        <Card.Body>
          <>{product.name}</>
        </Card.Body>
        <Card.Footer>
          <>{actionSlot}</>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export { ProductCard };
