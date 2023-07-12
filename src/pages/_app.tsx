import '@/shared/ui/base.css';
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  console.log(pageProps);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return getLayout(<Component {...pageProps} />);
}
