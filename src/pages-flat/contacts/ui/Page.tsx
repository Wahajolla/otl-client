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
  return { props: { data: 'kek' } };
};

const MainPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-8 pl-8 pr-8">
      <ActionHeader></ActionHeader>

      <Contacts></Contacts>
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
