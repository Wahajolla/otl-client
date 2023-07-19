import { wrapper } from '@/app/appStore';
import '@/shared/ui/base.css';
import { Provider as ReduxProvider } from 'react-redux';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../app/__mocks__');
}

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(rest);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <ReduxProvider store={store}>
      {getLayout(<Component {...props.pageProps} />)}
    </ReduxProvider>
  );
}
