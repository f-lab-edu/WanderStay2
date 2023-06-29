import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </div>
  );
}
