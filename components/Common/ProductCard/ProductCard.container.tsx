import { FC } from 'react';
import { Category, Product } from 'types/cms.types';
import ProductCard from './ProductCard.view';

interface Props {
  product: Product;
}

const Container: FC<Props> = ({ product }) => {
  const cardClick = () => {
    console.log('clicked');
  };
  return <ProductCard product={product} cardClick={cardClick} />;
};
export default Container;
