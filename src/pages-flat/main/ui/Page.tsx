import { Popover, Transition } from '@headlessui/react';

import { RectangleGroupIcon } from '@heroicons/react/24/outline';
import { Fragment, ReactElement } from 'react';
import { AppLayout } from '@/widgets/AppLayout';
import Button from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Contacts } from './Contacts/Contacts';
import Offer from './Offer/Offer';
import { Reviews } from './Reviews/Reviews';

const MainPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-5 ml-8 mr-8">
      <div className="bg-primary align-items-center  border flex flex-row">
        <Button>
          <RectangleGroupIcon className="w-6 h-6"></RectangleGroupIcon>Каталог
          {'  '}
        </Button>
        <div>
          {/* <Image className="inset-0" src="/images/metallo2.png"></Image> */}
        </div>
      </div>

      <Offer></Offer>
      <Reviews></Reviews>
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
