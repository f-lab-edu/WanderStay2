import { Button } from '../commons/Button';
import styled from '@emotion/styled';

export default function LoginButtons({
  className,
}: React.ComponentProps<'button'>) {
  return (
    <Wrapper className={className}>
      <LoginButton color='secondary'>회원가입</LoginButton>
      <LoginButton>로그인</LoginButton>
    </Wrapper>
  );
}

const LoginButton = styled(Button)({
  marginBottom: '20px',
});

const Wrapper = styled.div({
  width: '100%',
  justifyContent: 'space-between',
});
