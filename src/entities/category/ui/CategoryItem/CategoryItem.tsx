import Link from 'next/link';
import { FC } from 'react';
import { Category } from '../../model/types';
import clsx from 'clsx';
import styles from './CategoryItem.module.css';
import Button from '@/shared/ui/Button/Button';

interface Props {
  category: Category;
  icon?: React.ReactElement;
}
const CategoryItem: FC<Props> = ({ category, icon }) => {
  return (
    <Link href={'/catalogue/' + category.uuid}>
      <Button type="text">
        <span>{icon}</span>
        <a>{category.name}</a>
      </Button>
    </Link>
  );
};

export { CategoryItem };
