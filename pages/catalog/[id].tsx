import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import Breadcrumbs from '@components/common/Breadcrumbs';
import CatalogLayout from '@components/common/CatalogLayout';
import { fetchCategories } from 'data/api/catalog.fetch';
import { fetchProducts, fetchProductsByCategory } from 'data/api/product.fetch';
import { Category, Product } from 'types/cms.types';

type CategoryProps = {
  categories: Category[];
  products: Product[];
};

const BaseCategory: FC<CategoryProps> = ({ categories, products }) => {
  const router = useRouter();
  const [parentCat, setParentCat] = useState<Category>(
    categories.find((c) => c.category_id === router.query.id)
  );
  useEffect(() => {}, [categories, products]);

  return (
    <div>
      <Breadcrumbs
        links={[
          { breadcrumbName: 'Главная', path: '/' },
          { breadcrumbName: 'Каталог', path: '/catalog' },
          {
            breadcrumbName: parentCat.category,
            path: '/catalog/' + parentCat.category_id,
          },
        ]}
        title={parentCat.category}
      />
      {/* <p className="text-4xl text-center">{parentCat.name}</p> */}
      <CatalogLayout
        categoryList={categories}
        pId={+parentCat.category_id}
        title={parentCat.category}
        products={(products as Product[]).filter((p) =>
          p.categories?.includes(+parentCat.category_id)
        )}
      />
    </div>
  );
};

export default BaseCategory;

export async function getServerSideProps(context) {
  const categories = await fetchCategories();

  const products = await fetchProducts();
  return {
    props: { categories: categories.categories, products: products.products },
  };
}
