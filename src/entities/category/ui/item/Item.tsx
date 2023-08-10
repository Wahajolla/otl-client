import Link from 'next/link';
import { FC } from 'react';

import { Category } from '../../model/types';

import { Button } from '@/shared/ui';

interface Props {
  category: Category;
  icon?: React.ReactElement;
}
const Item: FC<Props> = ({ category, icon }) => {
  return (
    <Link passHref href={'/catalogue/' + category.uuid}>
      <Button block type="text">
        <span>{icon}</span>
        <p>{category.name}</p>
      </Button>
    </Link>
  );
};

export { Item };
