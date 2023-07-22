import styled from '@emotion/styled';
import { theme } from '@/src/ui-library/theme';

export default function FindPassword() {
  return <Wrapper>비밀번호 찾기</Wrapper>;
}

const Wrapper = styled.button((props) => ({
  color: theme.color.black.black300,
  fontSize: theme.typography.fontSizes.size200,
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights.line700,
  letterSpacing: theme.typography.letterSpacings.spacing200,
  border: 'none',
  backgroundColor: 'inherit',
  cursor: 'pointer',
}));
