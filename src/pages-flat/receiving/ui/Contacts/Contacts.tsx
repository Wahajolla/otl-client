import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { position } from 'styled-system';
const Contacts = () => {
  return (
    <address className="grid grid-cols-4 gap-4">
      <div className="col-span-2 flex flex-col divide-y gap-2">
        <div>
          <h1>Как добраться</h1>
          <h2>От Осташковского шоссе</h2>
          <p>
            {
              'Двигаемся по Осташковскому шоссе в сторону области, съехать с шоссе в сторону торгового комплекса "Твой дом". Повернуть направо и далее второй съезд влево и двигаться до круговой развязки. На развязке первый съезд направо. Далее двигаться прямо до первого съезда налево. После поворота проехать прямо до третьего съезда налево.'
            }
          </p>
          <h2>От МКАД</h2>
          <p>
            {
              'Съехать с 91-го съезда МКАД и двигаться прямо 490м. Свернуть направо и далее повернуть на первом съезде налево.'
            }
          </p>
        </div>
        <div>
          <h1>Контакты</h1>
        </div>
        <div>
          <h1>Оплата</h1>
        </div>
      </div>

      <div className="col-span-2">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=37.678333%2C55.899520&mode=search&oid=184535784417&ol=biz&z=13.72"
          width="100%"
          className="min-h-[500px]"
          style={{ position: 'relative' }}
        ></iframe>
      </div>
    </address>
  );
};

// export async function getServerSideProps(context) {
//   const data = await fetchColors();

//   return {
//     props: { data },
//   };
// }

export { Contacts };
