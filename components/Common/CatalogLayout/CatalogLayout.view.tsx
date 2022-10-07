import Head from 'next/head';
import { useState, Fragment } from 'react';
import { FC } from 'react';
import { Bars4Icon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';

const CatalogLayout: FC = () => {
  const [aside, setAside] = useState<boolean>(true);
  return (
    <div className="min">
      <Head>
        <script
          defer
          src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />
      </Head>
      <div className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        {/* <!-- logo --> */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="text-3xl"
            onClick={() => {
              setAside(!aside);
            }}
          >
            <Bars4Icon className="h-6 w-6" />
          </button>
          <div>Logo</div>
        </div>
      </div>

      <div className="flex">
        <Transition
          show={aside}
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          {
            <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 h-24">
              <a
                href="#"
                className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
              >
                <span className="text-2xl">
                  <i className="bx bx-home"></i>
                </span>
                <span>Dashboard</span>
              </a>

              <a
                href="#"
                className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
              >
                <span className="text-2xl">
                  <i className="bx bx-cart"></i>
                </span>
                <span>Cart</span>
              </a>

              <a
                href="#"
                className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
              >
                <span className="text-2xl">
                  <i className="bx bx-shopping-bag"></i>
                </span>
                <span>Shopping</span>
              </a>

              <a
                href="#"
                className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
              >
                <span className="text-2xl">
                  <i className="bx bx-heart"></i>
                </span>
                <span>My Favourite</span>
              </a>

              <a
                href="#"
                className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
              >
                <span className="text-2xl">
                  <i className="bx bx-user"></i>
                </span>
                <span>Profile</span>
              </a>
            </aside>
          }
        </Transition>
        {/* <!-- main content page --> */}
        <div className="w-full p-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          quam odit officiis magni doloribus ipsa dolore, dolores nihil
          accusantium labore, incidunt autem iure quae vitae voluptate, esse
          asperiores aliquam repellat. Harum aliquid non officiis porro at
          cumque eaque inventore iure. Modi sunt optio mollitia repellat sed ab
          quibusdam quos harum!
        </div>
      </div>
    </div>
  );
};
export default CatalogLayout;
