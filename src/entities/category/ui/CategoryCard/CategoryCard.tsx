import Link from 'next/link';
import { FC } from 'react';
import { Category } from '../../model/types';

interface Props {
  category: Category;
  cardClick: () => void;
}
const CategoryCard: FC<Props> = ({ category, cardClick }) => {
  return (
    <Link href={'/catalog/' + category.category_id} passHref>
      <div
        className="p-8 transition ease-in-out delay-50  hover:scale-105 cursor-pointer"
        onClick={cardClick}
      >
        <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/images/metallo.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{category.category}</div>
            <p className="text-gray-700 text-base">{category.position}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { CategoryCard };
