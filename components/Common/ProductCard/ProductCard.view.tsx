import { FC } from 'react';
import Image from 'next/image';
import img from '~public/images/metallo2.png';
import { Category, Product } from '~types/cms.types';
import Link from 'next/link';
import RoubleIcon from '~public/images/rouble.svg';

interface Props {
  product: Product;
  cardClick: () => void;
}
const ProductCard: FC<Props> = ({ product, cardClick }) => {
  return (
    <div
      className="p-6 transition ease-in-out delay-50  hover:scale-105 "
      onClick={cardClick}
    >
      <div className="w-64 h-48 secondary-border secondary-bg rounded-2xl border-2  overflow-hidden shadow-lg shadow-indigo-50 flex flex-col space-between">
        {/* <img
            className="w-full"
            src="/images/metallo.jpg"
            alt="Sunset in the mountains"ы
          /> */}

        <div className="px-6 py-4">
          <div className="font-bold text-primary text-xl mb-2">
            {product.productName}
          </div>
          <p className="text-sm text-secondary">{product.description}</p>
          <p className="text-secondary text-base">
            {product.dimensions + ',' + product.dimensionsRange}
          </p>
          <p className="mt-2 text-primary border  border-green-500 border-2-green-500 text-base rounded-2xl shadow-lg text-center ">
            {product.price}
            {', руб.'}
            {/* <Image src={RoubleIcon} alt="" height={'20rem'} width={'20rem'} /> */}
          </p>
        </div>
        <div className="px-6  pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
            <Link href={'/catalog/' + product.categoryId}>
              {product.category.name}
            </Link>
          </span>
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
  );
};

export default ProductCard;
