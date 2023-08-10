const ReceivingOptions = () => {
  return (
    <div>
      <article className="mb-4 grid grid-cols-2 gap-4">
        <div className="col-span-2  gap-1 rounded-lg bg-slate-50 p-6">
          <h1>Заказ</h1>
          <p>Для оформления заказа свяжитесь с нами</p>
          <a className="block text-red-900 " href={`tel:+7 (963) 929-87-41`}>
            +7 (963) 929-87-41
          </a>
          <a className="block text-red-900" href={`tel:+7 (969) 049 63 92`}>
            +7 (969) 049 63 92{' '}
          </a>
          <a className="block " href={`mailto:info@otlivchik.ru`}>
            info@otlivchik.ru
          </a>
        </div>
        <div className="col-span-2 rounded-lg bg-slate-50 p-6">
          <h1>Оплата при получении заказа </h1>
          <p>
            Наличными и картой при получении (самовывоз) или предоплата
            (доставка)
          </p>
        </div>
        <div className="rounded-lg bg-slate-50 p-6">
          <h1>Доставка</h1>
          <p>
            Доставляем с помощью курьеров или сторонних транспортных компаний.
            Согласовываем в индвидуальном порядке
          </p>
        </div>
        <div className="rounded-lg bg-slate-50 p-6">
          <h1>Самовывоз</h1>
          <p>Заранее готовим товары к приезду</p>
        </div>
      </article>
      <address className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1 ">
          <div>
            <h1>Самовывоз</h1>
            <h3>От Осташковского шоссе</h3>
            <p>
              {
                'Двигаемся по Осташковскому шоссе в сторону области, съехать с шоссе в сторону торгового комплекса "Твой дом". Повернуть направо и далее второй съезд влево и двигаться до круговой развязки. На развязке первый съезд направо. Далее двигаться прямо до первого съезда налево. После поворота проехать прямо до третьего съезда налево.'
              }
            </p>
            <h3>От МКАД</h3>
            <p>
              Съехать с 91-го съезда МКАД и двигаться прямо 490м. Свернуть
              направо и далее повернуть на первом съезде налево.
            </p>
          </div>
        </div>

        <div className="col-span-2 overflow-hidden rounded-lg md:col-span-1">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.678333%2C55.899520&mode=search&oid=184535784417&ol=biz&z=13.72"
            width="100%"
            className="min-h-[500px]"
            style={{ position: 'relative' }}
          ></iframe>
        </div>
      </address>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const data = await fetchColors();

//   return {
//     props: { data },
//   };
// }

export { ReceivingOptions };
