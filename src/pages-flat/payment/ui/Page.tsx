import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';

import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { AppLayout } from '@/widgets/layout/AppLayout';
import { Breadcrumbs } from '@/widgets/layout/Breadcrumbs';

interface Props {
  data: string;
}

export { Page };

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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: { data: '' } };
};
