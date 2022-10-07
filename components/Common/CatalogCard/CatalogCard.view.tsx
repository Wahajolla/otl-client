import { FC } from 'react';
import Image from 'next/image';
import img from '~public/images/metallo2.png';
import { Category } from '~types/cms.types';
import Link from 'next/link';

interface Props {
  category: Category;
  cardClick: () => void;
}
const CatalogCard: FC<Props> = ({ category, cardClick }) => {
  return (
    <Link href={'/catalog/' + category.id} passHref>
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
            <div className="font-bold text-xl mb-2">{category.name}</div>
            <p className="text-gray-700 text-base">{category.description}</p>
          </div>
          {/* <div className="px-6 pt-4 pb-2">
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}
        </div>
      </div>
    </Link>
  );
};

export default CatalogCard;
