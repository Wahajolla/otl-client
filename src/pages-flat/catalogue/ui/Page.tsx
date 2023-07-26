import { InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';
import { AppLayout } from '@/widgets/layout/AppLayout';
import { Breadcrumbs } from '@/widgets/layout/Breadcrumbs';
import { LayoutFooter } from '@/widgets/layout/LayoutFooter';
import { Category, categoryApi } from '@/entities/category';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { CategoryList } from '@/widgets/category/CategoryList';
import { StoreWrapper } from '@/app/appStore';

interface Props {
  categories: Category[];
}

export const getServerSideProps = StoreWrapper.getServerSideProps<Props>(
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
        categories: data,
      },
    };
  }
);

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ categories }) => {
  return (
    <PageDefaultLayout>
      <Breadcrumbs
        links={[
          { name: 'Главная', path: '/' },
          { name: 'Каталог', path: '/catalog' },
        ]}
      />
      <CategoryList categories={categories}></CategoryList>
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

export { Page };
