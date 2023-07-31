import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';

import { Contacts } from './Contacts/Contacts';

import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { AppLayout } from '@/widgets/layout/AppLayout';
import { Breadcrumbs } from '@/widgets/layout/Breadcrumbs';
interface Props {
  data: string;
}

export { MainPage };

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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: { data: 'kek' } };
};
