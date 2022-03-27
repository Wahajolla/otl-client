import AppLayout from '../components/AppLayout';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

require('../styles/AntdTheming.less');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Head>
        <link
          href={'/fonts/Arsenal/Arsenal-Bold.ttf'}
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href={'/fonts/Arsenal/Arsenal-Regular.ttf'}
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href={'/fonts/Arsenal/Arsenal-Italic.ttf'}
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href={'/fonts/Arsenal/Arsenal-BoldItalic.ttf'}
          rel="preload"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
