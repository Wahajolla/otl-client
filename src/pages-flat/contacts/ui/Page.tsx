import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';

import { AppLayout } from '@/widgets/AppLayout';
import { Breadcrumbs } from '@/widgets/Breadcrumbs';
import { LayoutFooter } from '@/widgets/LayoutFooter';
import { LayoutHeader } from '@/widgets/LayoutHeader';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { Contacts } from './Contacts/Contacts';
interface Props {
  data: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: { data: 'kek' } };
};

const MainPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return (
    <PageDefaultLayout>
      <Breadcrumbs
        links={[
          { name: 'Главная', path: '/' },
          { name: 'Получение', path: '/' },
        ]}
      />
      <Contacts></Contacts>
    </PageDefaultLayout>
  );
};

MainPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <>{page}</>
    </AppLayout>
  );
};

export { MainPage };
