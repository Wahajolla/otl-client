import { InferGetServerSidePropsType } from 'next';
import router from 'next/router';
import { ReactElement } from 'react';

import { storeWrapper } from '@/app/app-store';
import {
  Category,
  categoryApi,
  mapCategoriesToTree,
} from '@/entities/category';
import { CategoryTree } from '@/entities/category/model/types';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { CategoryList } from '@/widgets/category/CategoryGrid';
import { AppLayout } from '@/widgets/layout/AppLayout';
import { Breadcrumbs } from '@/widgets/layout/Breadcrumbs';
import { LayoutFooter } from '@/widgets/layout/LayoutFooter';

interface Props {
  categories: CategoryTree[];
}

export { Page };

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ categories }) => {
  return (
    <PageDefaultLayout>
      <Breadcrumbs
        links={[
          { name: 'Главная', path: '/' },
          { name: 'Каталог', path: '/catalogue' },
        ]}
      />
      <CategoryList
        onClick={(category) => router.push(`/catalogue/${category.uuid}`)}
        categories={categories}
      ></CategoryList>
    </PageDefaultLayout>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout footer={<LayoutFooter></LayoutFooter>}>
      <>{page}</>
    </AppLayout>
  );
};

export const getServerSideProps = storeWrapper.getServerSideProps<Props>(
  (store) => async () => {
    store.dispatch(categoryApi.endpoints.searchCategories.initiate());

    await Promise.all(
      store.dispatch(categoryApi.util.getRunningQueriesThunk())
    );
    const result = categoryApi.endpoints.searchCategories.select()(
      store.getState()
    );
    const { data, status, error } = result;

    if (!data || error) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        categories: mapCategoriesToTree(data),
      },
    };
  }
);
