import {
  Bars3BottomLeftIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Form/Input/Input';
import Logo from '@/shared/ui/Logo/Logo';

import styles from './Header.module.css';
const link =
  'https://yandex.ru/maps/10740/mytischi/house/ostashkovskoye_shosse_vl1bs7/Z04YcABoSUYPQFtvfXR4eH9iZA==/?from=mapframe&l=trf%2Ctrfe&ll=37.678319%2C55.899228&source=mapframe&utm_source=mapframe&z=17.81';

// className = 'max-w-5xl ml-auto mr-auto';

export const LayoutHeader: FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <header className="border-bottom sticky top-0 z-40 mb-5 w-full border-gray-50 bg-white shadow-sm ">
      <div
        className={clsx(
          ' left-0 top-0 z-50 hidden h-full w-0 flex-col gap-4 overflow-hidden border bg-white p-4 transition-all',
          collapsed && 'w-0',
          !collapsed && ' fixed w-64'
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <ListBulletIcon></ListBulletIcon>
          Каталог
        </div>
        <div className="flex flex-row items-center gap-2">
          <ListBulletIcon></ListBulletIcon>
          Корзина
        </div>
      </div>
      {!collapsed && (
        <div className="fixed inset-0 z-40 bg-black opacity-40 transition-all">
          <XMarkIcon
            onClick={() => setCollapsed((prev) => !prev)}
            className="absolute right-4 top-4 h-8 w-8 cursor-pointer  md:hidden"
          ></XMarkIcon>
        </div>
      )}
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
          {/* <Link href={'/contacts'}>
            <a>
              <MagnifyingGlassIcon></MagnifyingGlassIcon>

              <span className="ml-1 hidden md:inline">Поиск товаров</span>
            </a>
          </Link> */}

          <div className="  hidden gap-2 md:flex md:flex-row">
            <Link href={'/payment'}>
              <a>
                <span className="">Оплата</span>
              </a>
            </Link>
            <Link href={'/contacts'}>
              <a>
                <span className="">Получение</span>
              </a>
            </Link>
          </div>

          {/* <Link href={'/#compnaies'}>Компаниям</Link> */}
        </div>
      </nav>
      <div className=" ml-auto mr-auto flex max-w-7xl flex-row justify-start gap-4 px-6 pb-3 ">
        <Button
          className="hidden gap-1 md:flex md:flex-row md:items-center"
          size="s"
        >
          <ListBulletIcon className="hidden md:block"></ListBulletIcon>
          Каталог
        </Button>

        <Input
          name={'Поиск товаров'}
          size={'m'}
          placeholder={'Поиск товаров'}
          block
          prefixAfter={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
          onChange={() => {
            console.log('kek');
          }}
          onPressEnter={() => console.log('test')}
        ></Input>
        <div className="flex flex-row content-center items-center gap-4 ">
          <ShoppingCartIcon className="h-5 w-5"></ShoppingCartIcon>
          <UserIcon></UserIcon>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
