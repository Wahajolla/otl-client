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
      className="pr-6 pb-6 transition ease-in-out delay-50  hover:scale-105 "
      onClick={cardClick}
    >
      <div className="w-72 h-56 secondary-border secondary-bg rounded-2xl border-2  overflow-hidden shadow-lg shadow-indigo-50 flex flex-col justify-between">
        {/* <img
            className="w-full"
            src="/images/metallo.jpg"
            alt="Sunset in the mountains"
          /> */}

        <div className="w-auto h-48 max-h-48 flex justify-between flex-col px-6 py-4">
          <div className="font-bold text-primary text-xl mb-2">
            {product.productName}
          </div>
          <p className="text-sm text-secondary">{product.description}</p>
          <p className="text-secondary text-base">
            {product.dimensions + ',' + product.dimensionsRange}
          </p>
          <p className="mt-2 text-primary border border-green-500 border-2-green-500 text-base rounded-2xl shadow-lg text-center ">
            {product.price}
            {', руб.'}
            {/* <Image src={RoubleIcon} alt="" height={'20rem'} width={'20rem'} /> */}
          </p>
        </div>
        <div className="flex items-center ">
          <div className="inline-block h-fit bg-gray-200 rounded-full px-3 py-0.5 text-sm font-semibold text-primary ml-1 mb-1">
            <Link href={'/catalog/' + product.categoryId}>
              {product.category.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
