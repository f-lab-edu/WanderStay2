import * as icons from "./components/index";
import styled from '@emotion/styled';
import React from 'react';

interface IconProps {
    name: keyof typeof icons,
    width?: number,
    height?: number,
    color?: string,
    viewBox?: string,
}

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24, color = 'currentColor', viewBox = '0 0 24 24' }) => {
    const IconComponent = icons[name];

    if (!IconComponent) {
        console.error(`사용하시는 ${name}이 없습니다.`);
        return null;
    }

    const StyledSvgIcon = styled(IconComponent)`
        width: ${width}px;
        height: ${height}px;
        color: ${color};
    `;

    return (
        <StyledSvgIcon
            width={width}
            height={height}
            color={color}
            viewBox={viewBox}
        />
    );
};

export default Icon;
