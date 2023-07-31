import { InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';

import { storeWrapper } from '@/app/app-store';
import { Category, CategoryItem, categoryApi } from '@/entities/category';
import { CategoryWithDetails } from '@/entities/category/model/types';
import { Product, ProductWithDetails, productApi } from '@/entities/product';
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
          { name: 'Каталог', path: '/catalog' },
        ]}
      />
      <div>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-4">
        <aside>
          {category.sortable ? (
            <>Сортировка</>
          ) : (
            category.children?.map((c) => (
              <CategoryItem key={c.id} category={c}></CategoryItem>
            ))
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

      await Promise.all(
        store.dispatch(categoryApi.util.getRunningQueriesThunk())
      );

      const categoryResult = categoryApi.endpoints.getCategoryByUuid.select({
        uuid: uuid.toString(),
      })(store.getState());

      if (!categoryResult.data || categoryResult.error) {
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
          category: categoryResult.data,
          products: productResult.data || [],
        },
      };
    }
);
