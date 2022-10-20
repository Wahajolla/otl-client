import CatalogCard from '@/components/Common/CatalogCard';
import { Fragment, useEffect, useState } from 'react';
import { Bars4Icon, CubeIcon } from '@heroicons/react/24/outline';
import ProductCard from '~components/Common/ProductCard';
import { fetchCategories } from '~data/api/catalog.fetch';
import { fetchProducts } from '~data/api/product.fetch';
import { Category, Product } from '~types/cms.types';
import Link from 'next/link';
import { Transition } from '@headlessui/react';

const CatalogView = ({ products, categories }) => {
  const [cats, setCats] = useState<Category[]>([]);

  const [aside, setAside] = useState<boolean>(true);
  return (
    // <div>
    //   <p className="text-center text-5xl font-bold">Категории</p>
    //   <div className="flex flex-wrap justify-center">
    //     {products.map((prod: Product) => {
    //       //if (cat.parentId === null)
    //       return <ProductCard product={prod} key={prod.id} />;
    //     })}
    //   </div>
    // </div>
    <div className="min">
      <div className="flex w-full items-center justify-between bg-white p-2">
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
            <aside className="flex w-72 flex-col space-y-2  bg-white p-2 h-24">
              {categories.map((el) => {
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
        <div className="w-full p-4">
          <p className="text-6xl">Все товары</p>

          {/* <!-- main content page --> */}
          <div className=" flex flex-row flex-wrap justify-center">
            {products.map((p: Product) => {
              return <ProductCard product={p} key={p.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogView;

export async function getServerSideProps(context) {
  const products = await fetchProducts();
  const categories = await (
    await fetchCategories()
  ).filter((x) => x.parentId === null);
  return {
    props: { products, categories },
  };
}
