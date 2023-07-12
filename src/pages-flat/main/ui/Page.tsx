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
import { Contacts } from './Contacts/Contacts';
import { InfoHeader } from './InfoHeader';
import Offer from './Offer/Offer';
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
  console.log(props);

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
    <div className="flex h-full flex-1 flex-col gap-4 pl-6 pr-6 lg:gap-8 lg:pl-8 lg:pr-8">
      <InfoHeader></InfoHeader>
      <ActionHeader></ActionHeader>
      <Offer></Offer>

      <section>
        <div className="relative flex h-48 flex-col justify-center overflow-hidden rounded-lg align-middle">
          <div className="absolute h-full w-full">
            <Image
              className="absolute inset-0 transition-all hover:scale-105"
              src="/images/bending.jpg"
              alt="Изготовление продукции на заказ"
              layout="fill"
              objectFit="cover"
              // objectPosition={'25% 75%'}
            ></Image>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-slate-900 opacity-60"></div>
          <div className="z-10 ">
            <h1 className="text-center text-white">Изготовление</h1>
            <p className="text-center text-white">
              По эскизам, размерам, цветам
            </p>
          </div>
        </div>
      </section>

      <section className="w-full ">
        <h1 className="inline">Производители</h1>
        <p>Гарант качества нашей продукции</p>

        <div>
          <article className="grid grid-cols-5 gap-8">
            <Image
              width={50}
              objectFit="contain"
              height={250}
              alt="EUROMET"
              src="/brands/EUROMET.png"
            ></Image>
            <Image
              width={50}
              objectFit="contain"
              height={250}
              alt="GRANDLINE"
              src="/brands/GRANDLINE.png"
            ></Image>
            <Image
              width={50}
              objectFit="contain"
              height={250}
              alt="INOXPOINT"
              src="/brands/INOXPOINT.png"
            ></Image>
            <Image
              width={50}
              objectFit="contain"
              height={250}
              alt="NLMK"
              src="/brands/NLMK.png"
            ></Image>
            <Image
              width={50}
              objectFit="contain"
              height={250}
              alt="TECHNIKOL"
              src="/brands/TECHNIKOL.png"
            ></Image>
          </article>
        </div>
      </section>
      <section className="w-full">
        <h1>Заказчики</h1>
        <div>Доверяют и рекомендуют</div>
        <div>
          <article className="grid grid-cols-5 gap-8">
            <Image
              width={50}
              objectFit="contain"
              height={250}
              alt="EUROMET"
              src="/brands/EUROMET.png"
            ></Image>
            <Image
              width={50}
              objectFit="contain"
              height={250}
              alt="GRANDLINE"
              src="/brands/GRANDLINE.png"
            ></Image>
            <Image
              width={50}
              objectFit="contain"
              height={250}
              alt="INOXPOINT"
              src="/brands/INOXPOINT.png"
            ></Image>
            <Image
              width={50}
              objectFit="contain"
              height={250}
              alt="NLMK"
              src="/brands/NLMK.png"
            ></Image>
            <Image
              width={50}
              objectFit="contain"
              height={250}
              alt="TECHNIKOL"
              src="/brands/TECHNIKOL.png"
            ></Image>
          </article>
        </div>
      </section>

      <section className="flex w-full flex-row justify-between  gap-4">
        <div>
          <h1>Категория 1</h1>
          <h2>Подкатегория 1</h2>
          <h2>Подкатегория 2</h2>
          <h2>Подкатегория 3</h2>
        </div>

        <h1>Категория 2</h1>
        <h1>Категория 3</h1>
        <h1>Категория 4</h1>
      </section>
    </div>
  );
};

MainPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      header={<LayoutHeader></LayoutHeader>}
      footer={
        <>
          <LayoutFooter></LayoutFooter>
        </>
      }
    >
      <>{page}</>
    </AppLayout>
  );
};

export { MainPage };
