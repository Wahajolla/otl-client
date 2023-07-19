import { FC, ReactElement } from 'react';
import { Breadcrumbs } from '@/widgets/Breadcrumbs';
import {
  getRunningQueriesThunk,
  Product,
  productApi,
  ProductCard,
} from '@/entities/product';
import { wrapper as serverReduxWrapper } from '@/app/appStore';
import { AppLayout } from '@/widgets/AppLayout';
import { InferGetServerSidePropsType } from 'next';
import { ProductDetails } from '@/widgets/ProductDetails';
import { ProductWithDetails } from '@/entities/product/model/types';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';

type Props = {
  product: ProductWithDetails;
};

export const getServerSideProps = serverReduxWrapper.getServerSideProps<Props>(
  (store) => async (context) => {
    const id = context.params?.id;

    const result = store
      .dispatch(productApi.endpoints.getProductById.initiate({ id: +id }))
      .then((e) => e.data);

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    const data = await result;
    return {
      props: {
        product: data || null,
      },
    };
  }
);

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ product }) => {
  const details = product as ProductWithDetails;
  return (
    <PageDefaultLayout>
      <Breadcrumbs
        links={[
          { name: 'Главная', path: '/' },
          { name: 'Каталог', path: '/catalogue' },
          {
            name: details?.category?.name || 'Нет категории',
            path: `/catalogue/${details?.category?.id || ''}`,
          },
        ]}
      />

      <ProductDetails product={details}></ProductDetails>
    </PageDefaultLayout>
  );
};

export { Page };

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <>{page}</>
    </AppLayout>
  );
};
