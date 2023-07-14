import { FC } from 'react';

import { Product } from '../../model/types';

interface Props {
  product: Product;
  cardClick: () => void;
}
const ProductCard: FC<Props> = ({ product, cardClick }) => {
  return (
    <div
      className="delay-50 pb-6 pr-6 transition ease-in-out  hover:scale-105 "
      onClick={cardClick}
    >
      <div className="secondary-border secondary-bg flex h-56 w-72 flex-col  justify-between overflow-hidden rounded-2xl border-2 shadow-lg shadow-indigo-50">
        {/* <img
            className="w-full"
            src="/images/metallo.jpg"
            alt="Sunset in the mountains"
          /> */}

        <div className="flex h-48 max-h-48 w-auto flex-col justify-between px-6 py-4">
          <div className="text-primary mb-2 text-xl font-bold">
            {product.product}
          </div>
          <p className="text-secondary text-sm">{product.details}</p>
          <p className="text-secondary text-base">
            {/* {product + ',' + product.dimensionsRange} */}
          </p>
          <p className="text-primary border-2-green-500 mt-2 rounded-2xl border border-green-500 text-center text-base shadow-lg ">
            {product.price}
            {', руб.'}
            {/* <Image src={RoubleIcon} alt="" height={'20rem'} width={'20rem'} /> */}
          </p>
        </div>
        <div className="flex items-center ">
          <div className="text-primary mb-1 ml-1 inline-block h-fit rounded-full bg-gray-200 px-3 py-0.5 text-sm font-semibold">
            {/* <Link href={'/catalog/' + product.ca}>
              {/* {product.categories[0].name} }
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
