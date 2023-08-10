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
      <article className="mb-4 grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-slate-50 p-6">
          <h1>Оплата при получении заказа </h1>
          <p>Наличными и картой при оплате</p>
        </div>
      </article>
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
