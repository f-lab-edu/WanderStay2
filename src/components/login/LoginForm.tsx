import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { Input } from '../commons/Input';
import styled from '@emotion/styled';
import LoginButtons from './LoginButtons';
import SaveId from './SaveId';
import FindPassword from './FindPassword';
import loginApi from '@/src/apis/login.api';
import useAuth from '@/src/context/authContext';

export default function LoginForm({ className }: React.ComponentProps<'form'>) {
  const { setAuth } = useAuth();
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await loginApi({ email, password });

      const accessToken = response?.data?.accessToken;
      const user = response?.data?.user;

      if (!accessToken || !user) {
        throw new Error('데이터 없음');
      }

      setAuth({ user, accessToken });
      setEmail('');
      setPassword('');
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  {
    success && router.push('/');
  }
  return (
    <Wrapper className={className} onSubmit={handleSubmit}>
      <Input
        title='Email'
        value={email}
        ref={emailRef}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        title='PassWord'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <WrapperSaveIdAndFindPassword>
        <SaveId />
        <FindPassword />
      </WrapperSaveIdAndFindPassword>
      <LoginButtonStyled />
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

const LoginButtonStyled = styled(LoginButtons)({
  marginTop: '100px',
});

const WrapperSaveIdAndFindPassword = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '18px',
});
