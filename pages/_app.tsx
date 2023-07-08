import React from 'react';
import {AppProps} from 'next/app';
import {Global} from '@emotion/react';
import {globalStyles} from '@/styles/globalStyle';
import {ThemeProvider} from "@/context/themeContext";
import DarkModeToggle from "@/components/commons/headers/headerBtns/darkModeToggle";


export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider>
            <Global styles={globalStyles}/>
            <DarkModeToggle/>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}