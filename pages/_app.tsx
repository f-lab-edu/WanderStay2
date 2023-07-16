import App, { AppContext, AppProps } from 'next/app';
import {Global, ThemeProvider} from '@emotion/react';
import { globalStyles } from '../styles/globalStyle';
import {theme} from '@/ui-library/theme';
import { alertNotSupportDesktop } from '@/utils/common';
import FontLayout from "@/components/fonts";

export default function MyApp({ Component, pageProps }: AppProps) {
  alertNotSupportDesktop(pageProps.isMobile);

  return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles}/>
            <FontLayout>
            <Component {...pageProps} />
            </FontLayout>
        </ThemeProvider>
    );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const initialProps = await App.getInitialProps(appContext);

  const userAgent = appContext.ctx.req?.headers['user-agent'];

  const mobile = userAgent?.indexOf('Mobile');

  initialProps.pageProps.isMobile = mobile !== -1 ? true : false;

  return { ...initialProps };
};

