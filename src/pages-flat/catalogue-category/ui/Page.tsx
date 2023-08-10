import { InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';

import { storeWrapper } from '@/app/app-store';
import {
  Category,
  CategoryItem,
  categoryApi,
  getCategoryPath,
  getCategoryChildren,
} from '@/entities/category';
import { CategoryWithDetails } from '@/entities/category/model/types';
import { Product, ProductWithDetails, productApi } from '@/entities/product';
import { ProductsFilter } from '@/features/product/filterProducts';
import { Button } from '@/shared/ui';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { CategoryList } from '@/widgets/category/CategoryGrid';
import { AppLayout } from '@/widgets/layout/AppLayout';
import { Breadcrumbs } from '@/widgets/layout/Breadcrumbs';
import { LayoutFooter } from '@/widgets/layout/LayoutFooter';
import { ProductCards } from '@/widgets/product/ProductCards';
import { ProductList } from '@/widgets/product/ProductList';

interface Props {
  category: CategoryWithDetails;
  products: ProductWithDetails[];
}

export { Page };

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ category, products }) => {
  return (
    <PageDefaultLayout>
      <Breadcrumbs
        links={[
          { name: 'Главная', path: '/' },
          { name: 'Каталог', path: '/catalogue' },
          ...category.path.map((_category) => {
            return {
              name: _category.name,
              path: `/catalogue/${_category.uuid}`,
            };
          }),
        ]}
      />
      <div>
        <h1>{category.name}</h1>
      </div>
      <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-4">
        <aside className="flex flex-col gap-4 ">
          <div>
            <p>Найдено {products.length.toString()} товаров</p>
          </div>

          {category.children.length > 0 && (
            <>
              <hr></hr>
              <div>
                {category.children.map((c) => (
                  <div key={c.id}>
                    <CategoryItem category={c}></CategoryItem>
                  </div>
                ))}
              </div>
            </>
          )}

          {category.sortable && (
            <>
              <hr></hr>
              <ProductsFilter category={category}></ProductsFilter>

              <Button>Отфильтровать</Button>
              <Button type="secondary">Сбросить</Button>
              <Button type="text">Все фильтры</Button>
            </>
          )}
        </aside>

        <div className="md:col-span-3">
          <ProductCards products={products}></ProductCards>
        </div>
      </div>
    </PageDefaultLayout>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <>{page}</>
    </AppLayout>
  );
};

export const getServerSideProps = storeWrapper.getServerSideProps<Props>(
  (store) =>
    async ({ params }) => {
      const uuid = params?.uuid;
      if (!uuid) {
        return {
          notFound: true,
        };
      }
      store.dispatch(
        categoryApi.endpoints.getCategoryByUuid.initiate({
          uuid: uuid.toString(),
        })
      );
      store.dispatch(categoryApi.endpoints.searchCategories.initiate());
      await Promise.all(
        store.dispatch(categoryApi.util.getRunningQueriesThunk())
      );

      const categoryResult = categoryApi.endpoints.getCategoryByUuid.select({
        uuid: uuid.toString(),
      })(store.getState());

      const categoriesResult = categoryApi.endpoints.searchCategories.select()(
        store.getState()
      );

      if (
        !categoryResult.data ||
        categoryResult.error ||
        !categoriesResult.data ||
        categoriesResult.error
      ) {
        return {
          notFound: true,
        };
      }

      store.dispatch(
        productApi.endpoints.searchProducts.initiate({
          categoires: [categoryResult.data.id],
        })
      );

      await Promise.all(
        store.dispatch(productApi.util.getRunningQueriesThunk())
      );

      const productResult = productApi.endpoints.searchProducts.select({
        categoires: [categoryResult.data.id],
      })(store.getState());

      return {
        props: {
          category: {
            ...categoryResult.data,
            path: getCategoryPath(categoryResult.data, categoriesResult.data),
            children: getCategoryChildren(
              categoryResult.data,
              categoriesResult.data
            ),
          },
          products: productResult.data || [],
        },
      };
    }
);
