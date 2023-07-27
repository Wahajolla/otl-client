import { DefaultSeo } from 'next-seo';
import React from 'react';

import { config } from '@/shared/lib/config';

type Props = {};

const DefaultSeoHead = (props: Props) => {
  return (
    <DefaultSeo
      title="Отливчик - все для наружной отделки"
      description="Товары для наружной отделки дома по выгодным ценам. Изготовление отливов и доборных элементы за день. Москва."
      openGraph={{
        type: 'website',
        title: 'Отливчик - все для наружной отделки',
        locale: 'ru_RU',
        url: 'https://www.otlivchik.ru/',
        siteName: 'otlivchik',
        images: [
          {
            url: `${config.NEXT_PUBLIC_URL}/favicon.ico`,
            width: 60,
            height: 60,
            alt: 'Отливчик - все для наружной отделки',
          },
        ],
      }}
      additionalMetaTags={[
        {
          name: 'yandex-verification',
          content: '489579590226a12c',
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: `${config.NEXT_PUBLIC_URL}/favicon.ico`,
        },
      ]}
    />
  );
};

export { DefaultSeoHead };
