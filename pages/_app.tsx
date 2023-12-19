import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  SeamProvider,
} from "@seamapi/react";
import '@seamapi/react/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SeamProvider 
    publishableKey="seam_pk12N3QT6_sg1m3Gj0nHjUUwrP42WfPCN0"
    userIdentifierKey={"sumit"}
    disableCssInjection>
      <Component {...pageProps} />
    </SeamProvider>
  );
}

export default MyApp;
