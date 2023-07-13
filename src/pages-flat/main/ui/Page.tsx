import { Popover, Transition } from '@headlessui/react';
import { RectangleGroupIcon } from '@heroicons/react/24/outline';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/dist/client/image';
import { o } from 'odata';
import { Fragment, ReactElement, useEffect } from 'react';
import useSWR, { Fetcher } from 'swr';
import { ActionHeader } from '@/widgets/ActionHeader';
import { AppLayout } from '@/widgets/AppLayout';
import { LayoutFooter } from '@/widgets/LayoutFooter';
import { LayoutHeader } from '@/widgets/LayoutHeader';
import Button from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import Input from '@/shared/ui/Form/Input/Input';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import Cards from './Cards/Cards';
import { Contacts } from './Contacts/Contacts';
import Contractors from './Contractors/Contractors';

interface Props {
  data: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  let data;

  o('http://0.tcp.eu.ngrok.io:11147/SmallBusiness/odata/standard.odata', {
    headers: new Headers({
      Authorization: btoa(`odata.user:12345`),
      'Access-Control-Allow-Origin': '*',
    }),
    referrer: undefined,
  })
    .get('Catalog_Номенклатура')
    .query({ $format: 'json' })
    .then((e) => {
      data = e;
      console.log(data);
    })
    .catch((f) => console.log(f));

  return { props: { data: 'kek' } };
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
      {/* <>
        <address className="align-center md: col-span-2 flex flex-col justify-start gap-1  not-italic md:col-span-1  md:grid-cols-2 md:flex-row lg:flex-row">
          <a className="block leading-3 text-red-900 ">+7 (963) 929-87-41</a>
          <a className="block leading-3 text-red-900 ">+7 (969) 049 63 92 </a>
          <a className="block leading-4">info@otlivchik.ru</a>
          <a className="block leading-3">
            будни 9:00 - 19:00 | вск. 9:00 - 18:00
          </a>

          <div>
          <a className="block leading-4  "> Осташковское ш., вл1Бс7 </a>
          <a className="block leading-4">будни 9:00 - 19:00</a>
          <a className="block leading-4">вск. 9:00 - 18:00</a>
        </div>
        </address>
      </> */}

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
