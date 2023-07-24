import { ReactElement } from 'react';
import { Breadcrumbs } from '@/widgets/Breadcrumbs';
import {
  getRunningQueriesThunk,
  productApi,
  productSelectors,
} from '@/entities/product';
import { wrapper as serverReduxWrapper } from '@/app/appStore';
import { AppLayout } from '@/widgets/AppLayout';
import { InferGetServerSidePropsType } from 'next';
import { ProductDetails } from '@/widgets/product/ProductDetails';
import { ProductWithDetails } from '@/entities/product/model/types';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { ProductVariantSelection } from '@/widgets/product/ProductVariantSelection';
import { ProductImagePreview } from '@/widgets/product/ProductImagePreview';
import { useAppSelector } from '@/shared/model/hooks';
import { ProductActionCard } from '@/widgets/product/ProductActionCard';
import { BreadcrumbJsonLd, NextSeo, ProductJsonLd } from 'next-seo';

type Props = {
  product: ProductWithDetails;
};

export const getServerSideProps = serverReduxWrapper.getServerSideProps<Props>(
  (store) => async (context) => {
    const id = +context.params?.id;

    const result = store
      .dispatch(productApi.endpoints.getProductById.initiate({ id: id }))
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
  const variation = useAppSelector(productSelectors.variation);
  return (
    <PageDefaultLayout>
      <NextSeo title={details.name} description={details.description}></NextSeo>
      <ProductJsonLd
        productName={details.name}
        description={details.description}
        manufacturerName={details.manufacturer?.name}
        offers={details.variations.map((v) => {
          return {
            price: v.price,
            priceCurrency: 'RUB',
            itemCondition: 'https://schema.org/UsedCondition',
            availability: 'https://schema.org/InStock',
            seller: {
              name: 'Отливчик',
            },
          };
        })}
      />
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
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Books',
            item: 'https://example.com/books',
          },
          {
            position: 2,
            name: 'Authors',
            item: 'https://example.com/books/authors',
          },
          {
            position: 3,
            name: 'Ann Leckie',
            item: 'https://example.com/books/authors/annleckie',
          },
          {
            position: 4,
            name: 'Ancillary Justice',
            item: 'https://example.com/books/authors/ancillaryjustice',
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
          <ProductDetails product={details}></ProductDetails>
        </section>
      </article>
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
