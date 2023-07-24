import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
type Props = {};

function Cards({}: Props) {
  return (
    <div className=" grid grid-cols-1 items-stretch gap-4  sm:grid-cols-2 sm:text-center md:grid-cols-3 ">
      <Link href={'/catalogue'}>
        <article className="relative order-first col-span-2 h-36  overflow-hidden rounded-lg transition-all hover:cursor-pointer hover:bg-slate-50 md:col-span-2 ">
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
        </article>
      </Link>
      <Link href={'/production'}>
        <article className=" col-span-2 sm:order-last md:col-span-3">
          <div className="relative flex h-48 flex-col justify-center overflow-hidden rounded-lg align-middle">
            <div className="absolute h-full w-full">
              <Image
                className="absolute inset-0 transition-all hover:scale-105"
                src="/images/bending.jpg"
                alt="Изготовление продукции на заказ"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-slate-900 opacity-60"></div>
            <div className="z-10 ">
              <h1 className="text-center text-white">Изготовление</h1>
              <p className="text-center text-white">
                По эскизам, размерам, цветам
              </p>
            </div>
          </div>
        </article>
      </Link>
      <article className="relative  col-span-2 flex h-36  flex-row  overflow-hidden rounded-lg border p-4 align-middle sm:col-span-1">
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

export default Cards;
