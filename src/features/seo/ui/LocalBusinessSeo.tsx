import { LocalBusinessJsonLd, OrganizationJsonLd } from 'next-seo';
import React from 'react';

type Props = {};

const LocalBusinessSeo = (props: Props) => {
  return (
    <>
      <OrganizationJsonLd
        type="HomeAndConstructionBusiness"
        id="https://www.otlivchik.ru/#contact"
        logo="https://www.otlivchik.ru/favicon.ico"
        name="Отливчик"
        address={{
          streetAddress: 'Мытищи, Мытищинская ярмарка, Осташковское ш., вл1Бс7',
          addressLocality: 'Москва',
          addressRegion: 'Москва',
          GeolocationCoordinates: [55.89931, 37.678038],
          addressCountry: 'RU',
        }}
        contactPoint={[
          {
            telephone: '+7 (969) 049 63 92',
            contactType: 'Оформление заказа',
            email: 'info@otlivchik.ru',
            availableLanguage: ['Russian'],
          },
          {
            telephone: '+7 (963) 929-87-41',
            contactType: 'Во вопросам',
            email: 'info@otlivchik.ru',
            availableLanguage: ['Russian'],
          },
        ]}
        sameAs={['https://www.otlivchik.ru']}
        url="https://www.otlivchik.ru/"
      />
      <LocalBusinessJsonLd
        type="HomeAndConstructionBusiness"
        id="https://www.otlivchik.ru"
        name="Отливчик"
        description="Товары для наружной отделки дома по выгодным ценам. Изготовление отливов и доборных элементы за день. Москва."
        url="https://www.otlivchik.ru/"
        telephone="+7 (963) 929-87-41"
        address={{
          streetAddress: 'Мытищи, Мытищинская ярмарка, Осташковское ш., вл1Бс7',
          addressLocality: 'Москва',
          addressRegion: 'Москва',
          GeolocationCoordinates: [55.89931, 37.678038],
          addressCountry: 'RU',
        }}
        geo={{
          latitude: '55.89931',
          longitude: '37.678038',
        }}
        images={['https://www.otlivchik.ru/favicon.ico']}
        openingHours={[
          {
            opens: '09:00',
            closes: '19:00',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
          },
          {
            opens: '09:00',
            closes: '18:00',
            dayOfWeek: 'Sunday',
          },
        ]}
        rating={{
          ratingValue: '4.3',
          ratingCount: '7',
        }}
        review={[
          {
            author: 'Дмитрий',
            datePublished: '2022-01-09',
            name: 'Доступные цены, все в срок ',
            reviewBody:
              'Доступные цены. Сделали все о чем договорились, в срок о котором договорились.',
            reviewRating: {
              bestRating: '5',
              worstRating: '5',
              reviewAspect: 'Цены',
              ratingValue: '5',
            },
          },
          {
            author: 'Вадим',
            datePublished: '2022-06-22',
            name: 'Очень доволен - рекомендую',
            reviewBody:
              'Отправил днем эскиз - вечером получил заказ! Самое приятное - отливы защищены пленкой.',
            reviewRating: {
              bestRating: '5',
              worstRating: '5',
              reviewAspect: 'Изготовление',
              ratingValue: '5',
            },
          },
          {
            author: 'Витрикс',
            datePublished: '2022-01-09',
            name: 'Быстро и качественно',
            reviewBody:
              'Быстро и качественно изготавливают отливы и доборные элементы',
            reviewRating: {
              bestRating: '5',
              worstRating: '5',
              reviewAspect: 'Качество',
              ratingValue: '5',
            },
          },
        ]}
        makesOffer={[
          {
            priceSpecification: {
              type: 'UnitPriceSpecification',
              priceCurrency: 'RUB',
              price: '1000-10000',
            },
            itemOffered: {
              name: 'Продажа отливов',
              description: 'Продаем качественные отливы по доступным ценам',
            },
          },
          {
            priceSpecification: {
              type: 'UnitPriceSpecification',
              priceCurrency: 'RUB',
              price: '1000-10000',
            },
            itemOffered: {
              name: 'Продажа доборных элементов',
              description: 'Продаем доборные элементов по доступным ценам',
            },
          },
          {
            priceSpecification: {
              type: 'UnitPriceSpecification',
              priceCurrency: 'RUB',
              price: '1000-10000',
            },
            itemOffered: {
              name: 'Изготовление на заказ',
              description:
                'Изготавливаем отливы и доборные элементы на заказ по эскизам',
            },
          },
        ]}
        areaServed={[
          {
            geoMidpoint: {
              latitude: '55.89931',
              longitude: '37.678038',
            },
            geoRadius: '50000',
          },
        ]}
      />
    </>
  );
};

export { LocalBusinessSeo };
