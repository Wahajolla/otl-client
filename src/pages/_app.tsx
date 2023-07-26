import { StoreWrapper } from '@/app/appStore';
import { SiteDefaultSeo } from '@/features/seo';
import { config } from '@/shared/lib/config';
import '@/shared/ui/base.css';
import { Provider as ReduxProvider } from 'react-redux';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../app/__mocks__');
}

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = StoreWrapper.useWrappedStore(rest);

  const getLayout = Component.getLayout ?? ((page) => page);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const PageComponent = Component as any;
  return (
    <>
      <SiteDefaultSeo></SiteDefaultSeo>
      <ReduxProvider store={store}>
        {getLayout(<PageComponent {...props.pageProps} />)}
      </ReduxProvider>
    </>
  );
}
