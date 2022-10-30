import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect, Fragment, useState } from 'react';
//import styles from './MainMenu.module.scss';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const nav = [
  { name: 'Главная', href: '/', current: true },
  { name: 'Каталог', href: '/catalog', current: false },
  { name: 'О нас', href: '/about', current: false },
  { name: 'Контакты', href: '/contacts', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const MainMenu: FC = () => {
  const router = useRouter();
  const path = router.asPath;
  const [navigation, setNav] = useState(nav);
  useEffect(() => {
    setNav(
      navigation.map((f) => {
        console.log(router.asPath);

        f.href === router.asPath ? (f.current = true) : (f.current = false);
        return f;
      })
    );
    console.log(navigation);
  }, [router]);
  useEffect;
  return (
    <Disclosure as="nav" className="primary-bg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 items-center ">
              <div className="flex items-center justify-between w-full">
                <Link href={'/'} passHref>
                  <div className="flex flex-row items-center flex-shrink-0 cursor-pointer">
                    <Image
                      width={'60%'}
                      height={'60%'}
                      className="h-16 w-16"
                      src="/images/logo.svg"
                      alt=""
                    />
                    <p className="invisible w-0 text-4xl pl-2 text-secondary lg:visible lg:w-fit">
                      Отливчик
                    </p>
                  </div>
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? ' text-black secondary-bg'
                              : 'text-secondary hover:secondary-bg hover:text-black',
                            'px-3 py-2 rounded-md text-sm font-medium '
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row justify-end content-center  items-center p-2">
                  <a
                    href="mailto:info@otlivchik.ru"
                    className="flex flex-row items-center text-white  h-fit invisible w-0 lg:visible lg:w-auto"
                  >
                    <EnvelopeIcon width={20} height={20} className="pr-1" />{' '}
                    info@otlivchik.ru
                  </a>
                  <div className="flex flex-col justify-around m-2">
                    <a
                      href="tel:89639298741"
                      className="flex flex-nowrap  items-center overflow-x-auto overflow-visible text-white"
                    >
                      <PhoneIcon width={20} height={20} className="pr-1" />
                      <p className="break-normal whitespace-nowrap">
                        8 (963) 929 · 87 · 41
                      </p>
                    </a>
                    <a
                      href="tel:89639298741"
                      className="flex flex-nowrap  items-center overflow-x-auto overflow-visible text-white"
                    >
                      <PhoneIcon width={20} height={20} className="pr-1" />
                      <p className="break-normal whitespace-nowrap">
                        {' '}
                        8 (963) 929 · 87 · 41
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Открыть меню</span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {/* {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))} */}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Открыть меню</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  {/* <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      /> */}
                </div>
                <div className="ml-3">
                  {/* <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div> */}
                </div>
                {/* <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
              </div>
              <div className="mt-3 space-y-1 px-2">
                {/* {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))} */}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MainMenu;
