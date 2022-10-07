import { FC } from 'react';
import { Category } from '~types/cms.types';
import CatalogCard from './CatalogCard.view';

interface Props {
  category: Category;
}

const Container: FC<Props> = ({ category }) => {
  const cardClick = () => {
    console.log('clicked');
  };
  return <CatalogCard category={category} cardClick={cardClick} />;
};
export default Container;
