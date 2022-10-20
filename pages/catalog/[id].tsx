import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import CatalogLayout from '~components/Common/CatalogLayout/CatalogLayout.view';
import { fetchCategories } from '~data/api/catalog.fetch';
import {
  fetchProducts,
  fetchProductsByCategory,
} from '~data/api/product.fetch';
import { Category, Product } from '~types/cms.types';

const BaseCategory = ({ categories, products }) => {
  const router = useRouter();
  const [parentCat, setParentCat] = useState<Category>(
    categories.find((c) => c.id === +router.query.id)
  );
  return (
    <div>
      <p className="text-4xl text-center">{parentCat.name}</p>
      <CatalogLayout
        categoryList={categories}
        pId={parentCat.id}
        products={(products as Product[]).filter(
          (p) => p.catId === parentCat.id
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
    props: { categories, products },
  };
}
