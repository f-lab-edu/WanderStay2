import Logo from '@/src/components/commons/Logo';
import FindPassword from '@/src/components/login/FindPassword';
import LoginButtons from '@/src/components/login/LoginButtons';
import LoginInputForm from '@/src/components/login/LoginInputForm';
import SaveId from '@/src/components/login/SaveId';
import styled from '@emotion/styled';
import React from 'react';

export default function login() {
  return (
    <Wrapper>
      <LoginLogo />
      <LoginInputFormStyled />
      <WrapperSaveIdAndFindPassword>
        <SaveId />
        <FindPassword />
      </WrapperSaveIdAndFindPassword>
      <LoginButtonStyled />
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

const LoginLogo = styled(Logo)({
  marginTop: '150px',
});

const LoginInputFormStyled = styled(LoginInputForm)({
  marginTop: '100px',
});

const LoginButtonStyled = styled(LoginButtons)({
  marginTop: '100px',
});

const WrapperSaveIdAndFindPassword = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '18px',
});
