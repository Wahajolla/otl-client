import { log } from 'console';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { Fragment, ReactElement, useEffect, useState } from 'react';
import { AppLayout } from '@/widgets/AppLayout';
import { Breadcrumbs } from '@/widgets/Breadcrumbs';
import { LayoutFooter } from '@/widgets/LayoutFooter';
import { LayoutHeader } from '@/widgets/LayoutHeader';
import { Category, categoryApi } from '@/entities/category';
import { Product, productApi } from '@/entities/product';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { CategoryList } from '@/widgets/CategoryList';

interface Props {
  categories: Category[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // const categoriesSearchResult = await categoryApi.searchCategories();

  return {
    props: {
      categories: [],
    },
  };
};

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
