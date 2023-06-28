import Document, { NextScript, Head, Main, Html } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="yandex-verification" content="489579590226a12c" />
        </Head>
        <body className="dark site-bg">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
