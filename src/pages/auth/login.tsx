import Logo from '@/src/components/commons/Logo';
import LoginForm from '@/src/components/login/LoginForm';
import styled from '@emotion/styled';
import React from 'react';

export default function login() {
  return (
    <Wrapper>
      <MainLogo />
      <LoginFormStyled />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  width: '100%',
  maxWidth: '768px',
  height: '100vh',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 30px',
});

const MainLogo = styled(Logo)({
  marginTop: '150px',
});

const LoginFormStyled = styled(LoginForm)({
  marginTop: '100px',
});
