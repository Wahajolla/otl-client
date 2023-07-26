import { ReactElement } from 'react';
import { Breadcrumbs } from '@/widgets/layout/Breadcrumbs';
import { productApi } from '@/entities/product';

import { StoreWrapper } from '@/app/appStore';
import { AppLayout } from '@/widgets/layout/AppLayout';
import { InferGetServerSidePropsType } from 'next';
import { ProductDetails } from '@/widgets/product/ProductDetails';
import { ProductWithDetails } from '@/entities/product/model/types';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { ProductVariantSelection } from '@/widgets/product/ProductVariantSelection';
import { ProductImagePreview } from '@/widgets/product/ProductImagePreview';
import { ProductActionCard } from '@/widgets/product/ProductActionCard';
import { ProductDefaultSeo } from '@/features/seo';

type Props = {
  product: ProductWithDetails;
};

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ product }) => {
  return (
    <PageDefaultLayout>
      <ProductDefaultSeo productDetails={product}></ProductDefaultSeo>
      <Breadcrumbs
        links={[
          { name: 'Главная', path: '/' },
          { name: 'Каталог', path: '/catalogue' },
          {
            name: product?.category?.name || 'Нет категории',
            path: `/category/${product?.category?.uuid || ''}`,
          },
        ]}
      />
      <article className="grid grid-cols-1 gap-4  md:grid-cols-3 md:flex-row md:gap-10">
        <ProductImagePreview product={product}></ProductImagePreview>
        <section className="col-span-2 flex flex-col gap-4 md:col-span-1 ">
          <div>
            <p className="m-0">
              {product?.manufacturer?.name || 'Неизвестный производитель'}
            </p>
            <h1 className="m-0 text-2xl font-bold">{product.name}</h1>
          </div>
          <ProductVariantSelection product={product}></ProductVariantSelection>
        </section>
        <section className="col-span-2 md:col-span-1">
          <div>
            <ProductActionCard></ProductActionCard>
          </div>
        </section>
        <section className="col-span-3 ">
          <ProductDetails product={product}></ProductDetails>
        </section>
      </article>
    </PageDefaultLayout>
  );
};

export const getServerSideProps = StoreWrapper.getServerSideProps<Props>(
  (store) =>
    async ({ params }) => {
      const uuid = params?.uuid;
      if (!uuid) {
        return {
          notFound: true,
        };
      }
      store.dispatch(
        productApi.endpoints.getProductByUuid.initiate({
          uuid: uuid.toString(),
        })
      );

      await Promise.all(
        store.dispatch(productApi.util.getRunningQueriesThunk())
      );
      const result = productApi.endpoints.getProductByUuid.select({
        uuid: uuid.toString(),
      })(store.getState());
      const { data, status, error } = result;

      if (!data || error) {
        return {
          notFound: true,
        };
      }

      return {
        props: {
          product: data as ProductWithDetails,
        },
      };
    }
);

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <>{page}</>
    </AppLayout>
  );
};

export { Page };
