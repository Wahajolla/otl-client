import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';
import { AppLayout } from '@/widgets/AppLayout';
import { LayoutFooter } from '@/widgets/LayoutFooter';
import { LayoutHeader } from '@/widgets/LayoutHeader';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import Cards from './Cards/Cards';
import Contractors from './Contractors/Contractors';

interface Props {
  data: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  let data;

  return { props: { data: 'test' } };
};

const MainPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  (async () => {
    // fetch(
    //   'https://0.tcp.eu.ngrok.io:11147/SmallBusiness/odata/standard.odata/Catalog_Номенклатура'
    // ).catch((e) => console.log(e));
    // o('http://0.tcp.eu.ngrok.io:11147/SmallBusiness/odata/standard.odata', {
    //   headers: new Headers({
    //     Authorization: btoa(`odata.user:12345`),
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': 'true',
    //   }),
    // })
    //   .get('Catalog_Номенклатура')
    //   .query({ $format: 'json' })
    //   .then((e) => {
    //     console.log(e);
    //   })
    //   .catch((f) => console.log(f))
    //   .finally(() => console.log('fff'));
  })();

  return (
    <PageDefaultLayout>
      <Cards></Cards>
      <Contractors></Contractors>
    </PageDefaultLayout>
  );
};

MainPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      header={<LayoutHeader></LayoutHeader>}
      footer={<LayoutFooter></LayoutFooter>}
    >
      <>{page}</>
    </AppLayout>
  );
};

export { MainPage };
