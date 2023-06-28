import '@/shared/ui/globals.css';
export default function App({ Component, props }: AppPropsWithLayout) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return getLayout(<Component {...props} />);
}
