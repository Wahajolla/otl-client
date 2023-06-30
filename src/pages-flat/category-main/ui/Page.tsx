import { Transition } from '@headlessui/react';
import { Bars4Icon, CubeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { AppLayout } from '@/widgets/AppLayout';
import { Breadcrumbs } from '@/widgets/Breadcrumbs';
import { CategoryList } from '@/widgets/CategoryList';
import { categoryApi } from '@/entities/category';
import { productApi } from '@/entities/product';

const CategoriesPage = ({ products, categories }) => {
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
    <>
      <Breadcrumbs
        links={[
          { breadcrumbName: 'Главная', path: '/' },
          { breadcrumbName: 'Каталог', path: '/catalog' },
        ]}
      />
      <CategoryList categories={categories} products={products} />
    </>
  );
};
export { CategoriesPage };

export async function getServerSideProps(context) {
  const categoriesSearchResult = await categoryApi.searchCategories();
  const productsSearchResult = await productApi.searchProducts();
  return {
    props: {
      products: productsSearchResult.products,
      categories: categoriesSearchResult.categories,
    },
  };
  // categories.filter((x) => x.parentId === null);
  // return {
  //   props: { products, categories },
  // };
}
