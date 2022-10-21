import Head from 'next/head';
import { useState, Fragment } from 'react';
import { FC } from 'react';
import { Bars4Icon, CubeIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';
import { Category, Product } from '~types/cms.types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ProductCard from '../ProductCard';
interface Props {
  categoryList: Category[];
  products: Product[];
  pId: number;
}
const CatalogLayout: FC<Props> = ({ categoryList, products }) => {
  const [aside, setAside] = useState<boolean>(true);

  const router = useRouter();
  return (
    <div className="min">
      <div className="flex w-full items-center justify-between p-2">
        {/* <!-- logo --> */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="text-3xl visible 2xl:invisible xl:invisible"
            onClick={() => {
              setAside(!aside);
            }}
          >
            <Bars4Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="flex">
        <Transition
          show={aside}
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="-translate-x-full opacity-0"
        >
          {
            <aside className="flex w-72 flex-col space-y-2   p-2 h-24">
              {categoryList.map((el) => {
                return (
                  <Link key={el.id} href={'/catalog/' + el.id} passHref>
                    <div className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                      <span className="text-2xl">
                        <CubeIcon className="h-6 w-6" />
                      </span>
                      <span>{el.name}</span>
                    </div>
                  </Link>
                );
              })}
            </aside>
          }
        </Transition>
        {/* <!-- main content page --> */}
        <div className="w-full p-4">
          {products.map((p) => {
            return <ProductCard product={p} key={p.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default CatalogLayout;
