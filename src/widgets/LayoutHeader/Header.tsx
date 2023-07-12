import {
  MagnifyingGlassIcon,
  PhoneIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Button from '@/shared/ui/Button/Button';
import Logo from '@/shared/ui/Logo/Logo';
import styles from './Header.module.css';
const link =
  'https://yandex.ru/maps/10740/mytischi/house/ostashkovskoye_shosse_vl1bs7/Z04YcABoSUYPQFtvfXR4eH9iZA==/?from=mapframe&l=trf%2Ctrfe&ll=37.678319%2C55.899228&source=mapframe&utm_source=mapframe&z=17.81';

// className = 'max-w-5xl ml-auto mr-auto';

export const LayoutHeader: FC = () => {
  return (
    <header className="h-18 border-bottom sticky top-0 z-10 mb-5 w-full border-gray-50 bg-white shadow-sm ">
      <nav className="align-center ml-auto mr-auto flex max-w-7xl flex-row justify-between pb-2 pl-8 pr-8 pt-2">
        <Link href={'/'}>
          <Logo></Logo>
        </Link>
        <div className="flex flex-row gap-4 lg:gap-6">
          {/* <Link href={'/contacts'}>
            <a>
              <MagnifyingGlassIcon></MagnifyingGlassIcon>

              <span className="ml-1 hidden md:inline">Поиск товаров</span>
            </a>
          </Link> */}

          <Link href={'/login'}>
            <a>
              <UserIcon></UserIcon>

              <a className="ml-1 hidden md:inline">Войти</a>
            </a>
          </Link>
          <Link href={'/contacts'}>
            <a>
              <PhoneIcon className=""></PhoneIcon>

              <span className="ml-1 hidden md:inline">Контакты</span>
            </a>
          </Link>
          {/* <Link href={'/#compnaies'}>Компаниям</Link> */}
        </div>
      </nav>
    </header>
  );
};

export default LayoutHeader;
