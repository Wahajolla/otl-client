import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';
import { AppLayout } from '@/widgets/layout/AppLayout';
import { NextSeo, OrganizationJsonLd, ProductJsonLd } from 'next-seo';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import Cards from './Cards/Cards';
import Contractors from './Contractors/Contractors';
import { LocalBusinessSeo } from '@/features/seo';

interface Props {
  data: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: { data: 'test' } };
};

const MainPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return (
    <PageDefaultLayout>
      <LocalBusinessSeo></LocalBusinessSeo>
      <Cards></Cards>
      <Contractors></Contractors>
    </PageDefaultLayout>
  );
};

MainPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export { MainPage };
