import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';

import { AppLayout } from '@/widgets/AppLayout';
import { Breadcrumbs } from '@/widgets/Breadcrumbs';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';

interface Props {
  data: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: { data: '' } };
};

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return (
    <PageDefaultLayout>
      <Breadcrumbs
        links={[
          { name: 'Главная', path: '/' },
          { name: 'Оплата', path: '/' },
        ]}
      />
      {/* <Contacts></Contacts> */}
    </PageDefaultLayout>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <>{page}</>
    </AppLayout>
  );
};

export { Page };
