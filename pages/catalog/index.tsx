import CatalogCard from '@components/common/CatalogCard';
import { Fragment, useEffect, useState } from 'react';
import { Bars4Icon, CubeIcon } from '@heroicons/react/24/outline';
import ProductCard from '@components/common/ProductCard';
import { fetchCategories } from 'data/api/catalog.fetch';
import { fetchProducts } from 'data/api/product.fetch';
import { Category } from 'types/cms.types';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import Breadcrumbs from '@components/common/Breadcrumbs';
import CatalogLayout from '@components/common/CatalogLayout';

const CatalogView = ({ products, categories }) => {
  const [cats, setCats] = useState<Category[]>([]);

  const [aside, setAside] = useState<boolean>(true);

  const handleResize = () => {
    if (window.innerWidth < 1280) {
      setAside(false);
    } else {
      setAside(true);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });
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
    <div className="min bg-primary">
      <Breadcrumbs
        links={[
          { breadcrumbName: 'Главная', path: '/' },
          { breadcrumbName: 'Каталог', path: '/catalog' },
        ]}
      />
      <CatalogLayout categoryList={categories} products={products} />
    </div>
  );
};

export default CatalogView;

export async function getServerSideProps(context) {
  const products = await fetchProducts();
  const categor = await fetchCategories();
  return {
    props: { products: products.products, categories: categor.categories },
  };
  // categories.filter((x) => x.parentId === null);
  // return {
  //   props: { products, categories },
  // };
}
