import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { Input } from '../commons/Input';
import styled from '@emotion/styled';
import LoginButtons from './LoginButtons';
import SaveId from './SaveId';
import FindPassword from './FindPassword';
import loginApi, { LoginResponse } from '@/src/apis/login.api';
import useAuth from '@/src/context/authContext';
import axios, { AxiosError, AxiosResponse } from 'axios';

export default function LoginForm({ className }: React.ComponentProps<'form'>) {
  const { setAuth } = useAuth();
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const response: AxiosResponse<LoginResponse> = await loginApi({
        email,
        password,
      });
      if (response.status === 200) {
        const { token, user } = response.data;
        document.cookie = `token=${token}; path=/`;
        setAuth({ user, accessToken: token });
        setEmail('');
        setPassword('');
        router.push('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          setErrorMessage('이메일 혹은 비밀번호를 확인해주세요');
        }
      } else {
        console.warn(error);
      }
    }
  };

  return (
    <Wrapper className={className} onSubmit={handleSubmit}>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
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

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PasswordInput = styled(Input)`
  margin-top: 27px;
`;

const LoginButtonStyled = styled(LoginButtons)`
  margin-top: 100px;
`;

const WrapperSaveIdAndFindPassword = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 18px;
`;

const ErrorMessage = styled.div`
  margin-bottom: 15px;
  background-color: ${(props) => props.theme.color.error.error500};
  padding: 15px;
`;
