import React from 'react';
import { Input } from '../commons/Input';
import styled from '@emotion/styled';

export default function LoginInputForm({
  className,
}: React.ComponentProps<'form'>) {
  return (
    <Wrapper className={className}>
      <Input title='Email' />
      <PasswordInput title='PassWord' type='password' />
    </Wrapper>
  );
}

const Wrapper = styled.form({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const PasswordInput = styled(Input)({
  marginTop: '27px',
});
