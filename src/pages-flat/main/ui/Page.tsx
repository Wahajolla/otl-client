import { Popover, Transition } from '@headlessui/react';

import { RectangleGroupIcon } from '@heroicons/react/24/outline';
import { Fragment, ReactElement } from 'react';
import { ActionHeader } from '@/widgets/ActionHeader';
import { AppLayout } from '@/widgets/AppLayout';
import Button from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Contacts } from './Contacts/Contacts';
import { InfoHeader } from './InfoHeader';
import Offer from './Offer/Offer';

const MainPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-5 ml-8 mr-8 w-max-200">
      <InfoHeader></InfoHeader>
      <ActionHeader></ActionHeader>
      <Offer></Offer>
      <Contacts></Contacts>
    </div>
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
