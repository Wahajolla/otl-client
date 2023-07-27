import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { NextSeo, OrganizationJsonLd, ProductJsonLd } from 'next-seo';
import { ReactElement } from 'react';


import Cards from './Cards/Cards';
import Contractors from './Contractors/Contractors';

import { LocalBusinessSeo } from '@/features/seo';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { AppLayout } from '@/widgets/layout/AppLayout';

interface Props {
  data: string;
}

export { MainPage };

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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: { data: 'test' } };
};
