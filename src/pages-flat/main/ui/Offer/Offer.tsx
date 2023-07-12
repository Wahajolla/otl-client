import clsx from 'clsx';

import Image from 'next/dist/client/image';
import React, { Fragment } from 'react';
import Button from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import styles from './Offer.module.css';
type Props = {};

function Offer({}: Props) {
  return (
    <div className=" grid grid-cols-1 items-stretch gap-4  sm:grid-cols-2 sm:text-center md:grid-cols-3 ">
      <Card className="relative col-span-2 h-36  overflow-hidden rounded-lg transition-all hover:cursor-pointer hover:bg-slate-50 md:col-span-2 ">
        <Card.Body>
          <div className="flex h-full flex-col justify-center">
            <Image
              alt="Все товары"
              objectFit="cover"
              className="absolute inset-0 transition-all hover:scale-105"
              src="/images/roofBg.png"
              layout="fill"
            ></Image>
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-red-900 opacity-60"></div>

            <h1 className="z-10 text-center text-3xl text-white ">
              Все товары
            </h1>
          </div>
        </Card.Body>
      </Card>

      <article className="relative col-span-2 flex h-36  flex-row  overflow-hidden rounded-lg border p-4 align-middle sm:col-span-1">
        <h3 className="max-w-[10em]">Кровельные материалы</h3>
        <div className="absolute -bottom-6 -right-4 h-40 w-40 md:h-24 md:w-24 lg:h-36 lg:w-36">
          <Image
            alt="Водосточные системы"
            objectFit="contain"
            className="absolute bottom-0 "
            layout="fill"
            src="/images/roof.png"
          ></Image>
        </div>
      </article>

      <article className="relative col-span-2 flex h-36 flex-row  overflow-hidden  rounded-lg border p-4 align-middle sm:col-span-1 ">
        <h3 className="max-w-[10em]">Водосточные системы</h3>
        <div className="absolute -bottom-5 -right-4 h-40 w-40 md:h-24 md:w-24 lg:h-36 lg:w-36">
          <Image
            alt="Водосточные системы"
            objectFit="contain"
            className="absolute bottom-0"
            layout="fill"
            src="/images/tubes.png"
          ></Image>
        </div>
      </article>

      <article className="relative col-span-2 flex h-36  flex-row  overflow-hidden rounded-lg border p-4 align-middle sm:col-span-1">
        <h3 className="max-w-[10em]">Фасонные элементы</h3>
        <div className="absolute -bottom-6 -right-4 h-40 w-40 md:h-24 md:w-24 lg:h-36 lg:w-36">
          <Image
            alt="Водосточные системы"
            objectFit="contain"
            className="absolute bottom-0 "
            layout="fill"
            src="/images/fason.png"
          ></Image>
        </div>
      </article>

      <article className="relative col-span-2 flex h-36  flex-row  overflow-hidden rounded-lg border p-4 align-middle sm:col-span-1">
        <h3 className="max-w-[10em]">Дымники и колпаки</h3>
        <div className="absolute -bottom-6 -right-4 h-40 w-40 md:h-24 md:w-24 lg:h-36 lg:w-36">
          <Image
            alt="Водосточные системы"
            objectFit="contain"
            className="absolute bottom-0 "
            layout="fill"
            src="/images/smoker.png"
          ></Image>
        </div>
      </article>
    </div>
  );
}

export default Offer;
