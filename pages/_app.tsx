import AppLayout from '../components/AppLayout';

import '../styles/globals.scss';
import { AppProps } from 'next/app';
import Layout from '@components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
