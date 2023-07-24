import { wrapper } from '@/app/appStore';
import '@/shared/ui/base.css';
import { DefaultSeo } from 'next-seo';
import { Provider as ReduxProvider } from 'react-redux';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../app/__mocks__');
}

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(rest);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <>
      <DefaultSeo
        title="Отливчик - все для наружной отделки"
        description="Товары для наружной отделки дома по выгодным ценам. Изготовление отливов и доборных элементы за день. Москва."
        openGraph={{
          type: 'website',
          title:
            'https://loremflickr.com/640/480?lock=8951756016844800&w=1200&q=75',
          locale: 'ru_RU',
          url: 'https://www.otlivchik.ru/',
          siteName: 'otlivchik',
          images: [
            {
              url: 'https://loremflickr.com/640/480?lock=8951756016844800&w=1200&q=75',
              width: 60,
              height: 60,
              alt: 'Photo of text',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'yandex-verification',
            content: '489579590226a12c',
          },
        ]}
      />
      <ReduxProvider store={store}>
        {getLayout(<Component {...props.pageProps} />)}
      </ReduxProvider>
    </>
  );
}
