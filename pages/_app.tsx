import AppLayout from '../components/AppLayout';
// import 'antd/dist/antd.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
