import {createContext} from 'react';
import {useDarkMode} from "@/hooks/useDarkMode";
import {lightTheme, ColorTheme} from "@/styles/theme";

interface ContextProps {
    colorTheme: ColorTheme;
    toggleColorTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
    colorTheme: lightTheme,
    toggleColorTheme: () => {
        return null;
    }
})

export const ThemeProvider = ({children}) => {
    const {colorTheme, toggleColorTheme} = useDarkMode();

    return (
        <ThemeContext.Provider value={{colorTheme, toggleColorTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}