import { FC } from 'react';
import { Breadcrumbs } from '@/widgets/Breadcrumbs';
import { CategoryList } from '@/widgets/CategoryList';
import { Category, categoryApi } from '@/entities/category';
import { Product, productApi } from '@/entities/product';

type CategoryProps = {
  categories: Category[];
  parentCategory: Category;
  products: Product[];
};

const CategoryPage: FC<CategoryProps> = ({
  categories,
  parentCategory,
  products,
}) => {
  return (
    <>
      <Breadcrumbs
        links={[
          { breadcrumbName: 'Главная', path: '/' },
          { breadcrumbName: 'Каталог', path: '/catalog' },
          {
            breadcrumbName: parentCategory.category,
            path: '/catalog/' + parentCategory.category_id,
          },
        ]}
        title={parentCategory.category}
      />
      {/* <p className="text-4xl text-center">{parentCat.name}</p> */}
      <CategoryList
        categories={categories}
        parentCategoryId={+parentCategory.category_id}
        title={parentCategory.category}
        products={(products as Product[]).filter((p) =>
          p.categories?.includes(+parentCategory.category_id)
        )}
      />
    </>
  );
};

export { CategoryPage };

export async function getServerSideProps(context) {
  const categoriesSearchResult = await categoryApi.searchCategories();
  const productsSearchResult = await productApi.searchProducts();

  const parentCategory = categoriesSearchResult.categories.find(
    (c) => c.category_id === context.params.id
  );

  return {
    props: {
      categories: categoriesSearchResult.categories,
      parentCategory: parentCategory,
      products: productsSearchResult.products,
    },
  };
}
