import {
  ChatBubbleLeftEllipsisIcon,
  ClockIcon,
  EnvelopeIcon,
  HomeIcon,
  InformationCircleIcon,
  MapPinIcon,
  PhoneIcon,
  QueueListIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

import Moment from 'moment';
import Link from 'next/link';

import { FC } from 'react';

export const LayoutFooter: FC = () => {
  return (
    <footer
      className="text-secondary  mt-6  w-full bg-slate-50 pb-6 pt-6"

      // columns={[
      //   {
      //     title: '',
      //     className: 'text-secondary',
      //     items: [
      //       {
      //         // icon: <HomeIcon />,
      //         title: 'Главная',
      //         url: '/',
      //         openExternal: false,
      //         className:
      //           'text-secondary text-xl px-2 py-1 rounded-md hover:secondary-bg',
      //       },
      //       {
      //         // icon: <QueueListIcon />,
      //         className:
      //           'text-secondary text-xl px-3 py-2 rounded-md hover:secondary-bg',
      //         title: 'Каталог',
      //         url: '/catalog',
      //         openExternal: false,
      //       },
      //       {
      //         // icon: <InformationCircleIcon />,
      //         className:
      //           'text-secondary text-xl px-3 py-2 rounded-md hover:secondary-bg',
      //         title: 'О нас',
      //         url: '/about',
      //       },
      //     ],
      //   },
      //   {
      //     title: '',
      //     items: [
      //       {
      //         // icon: <UserCircleIcon />,
      //         title: 'Контакты',
      //         url: '/contacts',
      //         openExternal: false,
      //         className:
      //           'text-secondary text-xl px-3 py-2 rounded-md hover:secondary-bg',
      //       },
      //       {
      //         // icon: <MapPinIcon />,
      //         title: 'Мы на карте',
      //         url: 'https://yandex.ru/maps/-/CCUZI-GAGD',
      //         openExternal: true,
      //         className:
      //           'text-secondary text-xl px-3 py-2 rounded-md hover:secondary-bg',
      //       },
      //       {
      //         // icon: <ChatBubbleLeftEllipsisIcon />,
      //         title: 'Отзывы',
      //         url: '#',
      //         className:
      //           'text-secondary text-xl px-3 py-2 rounded-md hover:secondary-bg',
      //       },
      //     ],
      //   },
      // ]}
      // bottom={`Отливчик ${Moment().format('YYYY')}`}
    >
      <nav className="ml-auto mr-auto flex max-w-7xl flex-row justify-center gap-4 pb-2 pl-8 pr-8 pt-2 align-middle text-neutral-400 ">
        <Link href={'/'}>
          <div className="hover: flex cursor-pointer flex-row gap-2 align-middle transition-all hover:opacity-75 hover:transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-red-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
            <span className="text-red-900">отливчик</span>
          </div>
        </Link>
        <address className="flex flex-row justify-between gap-8 not-italic text-zinc-400">
          <Link href={''}>
            <div className="text-center">
              <MapPinIcon className="inline h-6  w-6"></MapPinIcon>{' '}
              <a className="text-zinc-400">Осташковское ш., вл1Бс7</a>
            </div>
          </Link>
          <Link href={''}>
            <div className="text-center">
              <ClockIcon className="inline h-6  w-6"></ClockIcon>{' '}
              <a className="text-zinc-400">9:00 - 19:00 | </a>
              <a className="text-zinc-400">воскресенье 9:00 - 18:00</a>
            </div>
          </Link>
          <Link href={''}>
            <div className="text-center">
              <PhoneIcon className="inline h-6 w-6"></PhoneIcon>{' '}
              <a className="text-zinc-400"> +7 (969) 049 63 92</a>
            </div>
          </Link>
          <Link href={''}>
            <div className="text-center">
              <EnvelopeIcon className="inline h-6 w-6"></EnvelopeIcon>{' '}
              <a className="text-zinc-400">info@otlivchik.ru</a>
            </div>
          </Link>
        </address>
      </nav>
    </footer>
  );
};

export default LayoutFooter;
