import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
const ContactPage = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-4xl pb-4">Контакты</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y divide-x border b-1">
        <div>
          <h2>Отдел продаж</h2>
          <p>
            <a
              href="tel:89639298741"
              className="flex flex-nowrap  items-center overflow-x-auto overflow-visible text-black"
            >
              <PhoneIcon width={20} height={20} className="pr-1" />
              <p className="break-normal whitespace-nowrap">
                {' '}
                8 (963) 929 · 87 · 41
              </p>
            </a>
          </p>
        </div>
        <div>
          <h2>Время работы</h2>
          <p>Понедельник - Суббота</p>
          <p>9:00 - 19:00</p>
          <p>Воскресенье</p>
          <p>9:00 - 18:00</p>
        </div>
        <div>
          {' '}
          <h2>Электронная почта</h2>
          <p>
            <a
              href="mailto:info@otlivchik.ru"
              className="flex flex-row items-center text-black  h-fit invisible w-0 lg:visible lg:w-auto"
            >
              <EnvelopeIcon width={20} height={20} className="pr-1" />{' '}
              info@otlivchik.ru
            </a>
          </p>
        </div>
        <div className="">
          <h2>Наш адрес</h2>
          <p>Россия, Москва 91-ый км. МКАД, Мытищинская Ярмарка, Ангар 7</p>
        </div>
        <div className="col-span-1 lg:col-span-2 text-center">
          <h2>Схема проезда</h2>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h3>Как добраться</h3>
              <h4>От Осташковского шоссе</h4>
              <p>
                {
                  'Двигаемся по Осташковскому шоссе в сторону области, съехать с шоссе в сторону торгового комплекса "Твой дом". Повернуть направо и далее второй съезд влево и двигаться до круговой развязки. На развязке первый съезд направо. Далее двигаться прямо до первого съезда налево. После поворота проехать прямо до третьего съезда налево.'
                }
              </p>
              <h4>От МКАД</h4>
              <p>
                {
                  'Съехать с 91-го съезда МКАД и двигаться прямо 490м. Свернуть направо и далее повернуть на первом съезде налево.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const data = await fetchColors();

//   return {
//     props: { data },
//   };
// }

export { ContactPage };
