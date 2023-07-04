import LocalStorage from "@/utils/localStorageUtil";
import {useEffect, useState} from 'react';
import {lightTheme, darkTheme, ColorTheme} from "@/styles/theme";

export const useDarkMode = () => {
    const [colorTheme, setColorTheme] = useState<ColorTheme>(lightTheme);
    const localStorage = new LocalStorage();

    const setMode = (mode: ColorTheme) => {
        mode === lightTheme
            ? localStorage.setItem('theme', 'light')
            : localStorage.setItem('theme', 'dark');
        setColorTheme(mode);
    }

    const toggleColorTheme = () => {
        colorTheme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');

        if (localTheme !== null) {
            if (localTheme === 'dark') {
                setColorTheme(darkTheme);
                document.body.dataset.theme = 'dark';
            } else {
                setColorTheme(lightTheme);
                document.body.dataset.theme = 'light';
            }
        }
    }, [colorTheme]);

    return {colorTheme, toggleColorTheme}
}
