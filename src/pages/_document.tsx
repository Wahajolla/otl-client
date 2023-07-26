import { DefaultSeo } from 'next-seo';
import Document, { NextScript, Head, Main, Html } from 'next/document';

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ru">
        <Head></Head>

        <body className="site-bg">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
