import Image from 'next/image';
import React from 'react';
type Props = {};

function Contractors({}: Props) {
  return (
    <>
      <section className="w-full ">
        <h1 className="inline">Производители</h1>
        <p>Гарант качества продукции</p>
        <div className="grid grid-cols-5 opacity-40 saturate-0">
          <Image
            width={50}
            objectFit="contain"
            height={80}
            alt="Euromet"
            src="/brands/EUROMET.png"
          ></Image>
          <Image
            width={50}
            objectFit="contain"
            height={50}
            alt="Grand Line"
            src="/brands/GRANDLINE.png"
          ></Image>
          <Image
            width={50}
            objectFit="contain"
            height={50}
            alt="Inoxpoint"
            src="/brands/INOXPOINT.png"
          ></Image>
          <Image
            width={50}
            objectFit="contain"
            height={50}
            alt="НЛМК"
            src="/brands/NLMK.png"
          ></Image>
          <Image
            width={50}
            objectFit="contain"
            height={50}
            alt="Технониколь"
            src="/brands/TECHNIKOL.png"
          ></Image>
        </div>
      </section>
      <section className="w-full ">
        <h1 className="inline">Клиенты</h1>
        <p>Нам доверяют</p>

        <div className="grid grid-cols-5 opacity-40 saturate-0">
          <Image
            width={50}
            objectFit="contain"
            height={80}
            alt="Открытие Банк"
            src="/clients/Client_1.png"
          ></Image>
          <Image
            width={50}
            objectFit="contain"
            height={50}
            alt="Веванта"
            src="/clients/Client_2.png"
          ></Image>
          <Image
            width={50}
            objectFit="contain"
            height={50}
            alt="Атлант"
            src="/clients/Client_3.png"
          ></Image>
          <Image
            width={50}
            objectFit="contain"
            height={50}
            alt="Kraft"
            src="/clients/Client_4.png"
          ></Image>
          <Image
            width={50}
            objectFit="contain"
            height={50}
            alt="Новая Линия"
            src="/clients/Client_5.png"
          ></Image>
        </div>
      </section>
    </>
  );
}

export default Contractors;
