import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import Breadcrumbs from '@components/common/Breadcrumbs';
import CatalogLayout from '@components/common/CatalogLayout';
import { fetchCategories, fetchCategory } from 'data/api/catalog.fetch';
import { fetchProducts, fetchProductsByCategory } from 'data/api/product.fetch';
import { Category, Product } from 'types/cms.types';

type CategoryProps = {
  categories: Category[];
  products: Product[];
};

const BaseCategory: FC<CategoryProps> = ({ categories, products }) => {
  const router = useRouter();
  useEffect(() => {
    const category = fetchCategory(+router.query.id);
  }, [router.query.id]);
  // const [parentCat, setParentCat] = useState<Category>(
  //   categories.find((c) => c.category_id === router.query.id)
  // );
  // useEffect(() => {
  //   setParentCat(categories.find((c) => c.category_id === router.query.id));
  // }, [router.query.id]);
  return (
    <div>
      {/* <Breadcrumbs
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
      {/* <CatalogLayout
        categoryList={categories}
        pId={+parentCat.category_id}
        title={parentCat.category}
        products={(products as Product[]).filter((p) =>
          p.category_ids?.includes(+parentCat.category_id)
        )}
      />
      {console.log(parentCat)}  */}
    </div>
  );
};

export default BaseCategory;

export async function getServerSideProps(context) {
  const categories = await fetchCategories();
  console.log(context);

  const category = await fetchCategory(context.params.id);

  const products = await fetchProducts();
  return {
    props: { products: products.products },
  };
}
