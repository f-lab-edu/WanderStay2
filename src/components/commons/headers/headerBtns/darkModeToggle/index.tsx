import React, { useContext } from "react";
import { ThemeContext } from "@/src/context/themeContext";
import styled from "@emotion/styled";
import { lightTheme, ColorTheme } from "@/src/styles/theme";

interface ToggleProps {
  colorTheme: ColorTheme;
}

const DarkModeToggle = () => {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleColorTheme} colorTheme={colorTheme}>
      {colorTheme === lightTheme ? "다크 모드" : "라이트 모드"}
    </ToggleButton>
  );
};

const ToggleButton = styled("button")<ToggleProps>`
  display: flex;
  background: ${({ colorTheme }) => colorTheme.background};
  color: ${({ colorTheme }) => colorTheme.main};
  cursor: pointer;
`;

export default DarkModeToggle;
