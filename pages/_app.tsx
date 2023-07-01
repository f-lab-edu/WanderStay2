import React, {createContext} from 'react';
import {AppProps} from 'next/app';
import {Global} from '@emotion/react';
import {globalStyles} from '@/styles/globalStyle';
import {lightTheme, ColorTheme} from "@/styles/theme";
import {useDarkMode} from "@/hooks/useDarkMode";
import DarkModeToggle from "@/components/commons/headers/headerBtns/darkModeToggle";

interface ContextProps {
    colorTheme: ColorTheme;
    toggleColorTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
    colorTheme: lightTheme,
    toggleColorTheme: () => {
        return null
    }
});

export default function App({Component, pageProps}: AppProps) {
    const {colorTheme, toggleColorTheme} = useDarkMode();

    return (
        <ThemeContext.Provider value={{colorTheme, toggleColorTheme}}>
            <Global styles={globalStyles}/>
            <DarkModeToggle/>
            <Component {...pageProps} />
        </ThemeContext.Provider>
    );
}