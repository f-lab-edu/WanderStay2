import LocalStorage from "@/src/utils/localStorageUtil";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme, ColorTheme } from "@/src/styles/theme";

export const useDarkMode = () => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(lightTheme);
  const localStorage = new LocalStorage();

  const setMode = (mode: ColorTheme) => {
    mode === lightTheme
      ? localStorage.setItem("travel-theme-frontend-v1", "light")
      : localStorage.setItem("travel-theme-frontend-v1", "dark");
    setColorTheme(mode);
  };

  const toggleColorTheme = () => {
    colorTheme === lightTheme ? setMode(darkTheme) : setMode(lightTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("travel-theme-frontend-v1");

    if (localTheme !== null) {
      if (localTheme === "dark") {
        setColorTheme(darkTheme);
        document.body.dataset.theme = "dark";
      } else {
        setColorTheme(lightTheme);
        document.body.dataset.theme = "light";
      }
    }
  }, [colorTheme]);

  return { colorTheme, toggleColorTheme };
};
