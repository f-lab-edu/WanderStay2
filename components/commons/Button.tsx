import styled from '@emotion/styled';
import React from 'react';

import Text from '@/components/commons/Text';

export interface Props extends React.ComponentProps<'button'> {
  fullWidth: boolean;
  size: 'sm' | 'md' | 'lg';
  color: 'primary' | 'secondary' | 'minimal';
}

type ButtonProps = Partial<Props>;
type WrapperProps = Pick<ButtonProps, 'fullWidth' | 'size' | 'color'>;

export const Button = ({
  fullWidth = true,
  size = 'lg',
  color = 'primary',
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <Wrapper>
      {React.isValidElement(children) ? (
        children
      ) : (
        <Text style={{ fontSize: '200px' }}>
          {children as 'string' | 'number'}
        </Text>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.button<WrapperProps>((props) => ({
  // ...props.theme.botton.default,
  // ...props.theme.button.color[props.color],
  // ...props.theme.button.size[props.size],
  width: props.fullWidth ? '100%' : 'auto',
}));
