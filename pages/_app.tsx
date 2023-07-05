import App, { AppContext, AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyle';
import { alertNotSupportDesktop } from '@/utils/common';

export default function MyApp({ Component, pageProps }: AppProps) {
  alertNotSupportDesktop(pageProps.isMobile);

  return (
    <div>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const initialProps = await App.getInitialProps(appContext);

  const userAgent = appContext.ctx.req?.headers['user-agent'];

  const mobile = userAgent?.indexOf('Mobile');

  initialProps.pageProps.isMobile = mobile !== -1 ? true : false;

  return { ...initialProps };
};
