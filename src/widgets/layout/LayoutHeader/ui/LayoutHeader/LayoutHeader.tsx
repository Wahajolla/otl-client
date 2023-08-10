import {
  ArchiveBoxIcon,
  Bars3BottomLeftIcon,
  CreditCardIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { useMediaQuery } from '@/shared/lib/use-media-query';
import { Overlay } from '@/shared/ui';
import Logo from '@/shared/ui/Logo/Logo';
import { CategorySearch } from '@/widgets/category/CategorySearch';
import { ProductSearch } from '@/widgets/product/ProductSearch';

const link =
  'https://yandex.ru/maps/10740/mytischi/house/ostashkovskoye_shosse_vl1bs7/Z04YcABoSUYPQFtvfXR4eH9iZA==/?from=mapframe&l=trf%2Ctrfe&ll=37.678319%2C55.899228&source=mapframe&utm_source=mapframe&z=17.81';

// className = 'max-w-5xl ml-auto mr-auto';
type Props = {
  actionsSlot?: React.ReactNode;
};

const NavigationList: React.ReactNode[] = [
  // <Link href={'/payment'} key={'payment'}>
  //   <a>
  //     <CreditCardIcon className="m-2 h-5 w-5 md:hidden"></CreditCardIcon>
  //     <p>Оплата</p>
  //   </a>
  // </Link>,
  <Link href={'/receiving'} key={'receiving'}>
    <a>
      <ArchiveBoxIcon className="m-2 h-5 w-5 md:hidden"></ArchiveBoxIcon>
      <p>Заказ и получение</p>
    </a>
  </Link>,

  <Link href={'/receiving'} key={'contacts'}>
    <a>
      <PhoneIcon className="m-2 h-5 w-5 md:hidden"></PhoneIcon>
      <p>Контакты</p>
    </a>
  </Link>,
];

// <MapPinIcon className="inline h-6  w-6"></MapPinIcon>{' '}
//       <>Осташковское ш., вл1Бс7</>
//     </a>

//     <a className="text-center" href="https://yandex.ru/maps/-/CXUv47S">
//       <ClockIcon className="inline h-6  w-6"></ClockIcon>{' '}
//       <>9:00 - 19:00 | </>
//       <>воскресенье 9:00 - 18:00</>
//     </a>

//     <a className="text-center" href={`tel:+7 (969) 049 63 92`}>
//       <PhoneIcon className="inline h-6 w-6"></PhoneIcon>{' '}
//       <> +7 (969) 049 63 92</>
//     </a>

export const LayoutHeader: FC<Props> = ({ actionsSlot }) => {
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!collapsed) {
      setCollapsed(true);
    }
  }, [router.asPath]);

  const isReached = useMediaQuery('md');

  useEffect(() => {
    if (isReached) setCollapsed((prev) => true);
  }, [isReached]);

  return (
    <header className="border-bottom sticky top-0 z-40 mb-4 w-full border-gray-50 bg-white shadow-sm ">
      <Overlay
        sider
        collapsed={collapsed}
        header={
          <div className="flex w-full flex-row justify-end">
            <XMarkIcon
              onClick={() => setCollapsed((prev) => !prev)}
              className=" h-8 w-8 cursor-pointer  "
            ></XMarkIcon>
          </div>
        }
      >
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex flex-1 flex-col ">
            {NavigationList.map((e) => e)}
          </div>

          <address className="flex flex-none flex-col  justify-start gap-1  not-italic">
            <a
              className="block leading-3 text-red-900 "
              href={`tel:+7 (963) 929-87-41`}
            >
              +7 (963) 929-87-41
            </a>
            <a
              className="block leading-3 text-red-900"
              href={`tel:+7 (969) 049 63 92`}
            >
              +7 (969) 049 63 92{' '}
            </a>
            <a className="block leading-4" href={`mailto:info@otlivchik.ru`}>
              info@otlivchik.ru
            </a>
            <a
              className="block leading-3"
              href="https://yandex.ru/maps/-/CXUv47S"
            >
              будни 9:00 - 19:00 | вск. 9:00 - 18:00
            </a>
            <a className="block" href="https://yandex.ru/maps/-/CXUv47S">
              Мытищи, Мытищинская ярмарка
            </a>
            <a className="block" href="https://yandex.ru/maps/-/CXUv47S">
              Осташковское ш., вл1Бс7
            </a>
          </address>
        </div>
      </Overlay>

      <nav className="align-center ml-auto mr-auto flex max-w-7xl flex-row  justify-between pb-2 pl-8 pr-8 pt-2">
        <Bars3BottomLeftIcon
          onClick={() => setCollapsed((prev) => !prev)}
          className="h-6 w-6 cursor-pointer text-[var(--primary-color)] md:hidden"
        ></Bars3BottomLeftIcon>
        {/* </Button> */}
        <Link href={'/'}>
          <div className="justify-self-center">
            <Logo></Logo>
          </div>
        </Link>

        <div className="flex flex-row gap-4 lg:gap-6">
          <div className="  hidden gap-2 md:flex md:flex-row">
            {NavigationList.map((e) => e)}
          </div>
        </div>
      </nav>

      <div className=" ml-auto mr-auto flex max-w-7xl flex-row justify-start gap-4 px-6 pb-3 ">
        <CategorySearch initialCategories={[]}></CategorySearch>
        <ProductSearch></ProductSearch>
        {/* <div className="flex flex-row content-center items-center gap-4 ">
          <ShoppingCartIcon className="h-5 w-5"></ShoppingCartIcon>
          <UserIcon></UserIcon>
        </div> */}
      </div>
    </header>
  );
};

export default LayoutHeader;
