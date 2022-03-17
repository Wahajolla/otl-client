import { Menu } from "antd";
import AppLayout from "../components/AppLayout";
import "antd/dist/antd.css";

import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
