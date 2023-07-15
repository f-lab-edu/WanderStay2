import styled from '@emotion/styled';
import React from 'react';

import buttonStyle from '@/ui-library/customize/button';

export interface CommonButtonProps extends React.ComponentProps<'button'> {
  fullWidth: boolean;
  size: 'sm' | 'md' | 'lg';
  color: 'primary' | 'secondary' | 'minimal';
}

type ButtonProps = Partial<CommonButtonProps>;
type WrapperProps = Pick<CommonButtonProps, 'fullWidth' | 'size' | 'color'>;

export const Button = ({
  fullWidth = true,
  size = 'lg',
  color = 'primary',
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  const { style, onClick } = props;
  return (
    <Wrapper
      size={size}
      color={color}
      fullWidth={fullWidth}
      style={style}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<WrapperProps>((props) => ({
  ...buttonStyle.default,
  ...buttonStyle.color[props.color],
  ...buttonStyle.size[props.size],
  width: props.fullWidth ? '100%' : 'auto',
}));
