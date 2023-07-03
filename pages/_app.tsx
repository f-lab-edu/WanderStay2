import {AppProps} from 'next/app';
import {Global, ThemeProvider} from '@emotion/react';
import {globalStyles} from '../styles/globalStyle';
import {theme} from '@/ui-library/theme';

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Global styles={globalStyles}/>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
