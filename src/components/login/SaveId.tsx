import styled from '@emotion/styled';
import { theme } from '@/src/ui-library/theme';

export default function SaveId() {
  return (
    <Wrapper>
      <Checkbox type='checkbox' />
      <SaveIdText>아이디 저장</SaveIdText>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  display: 'flex',
  alignContent: 'center',
});

const Checkbox = styled.input({
  marginRight: '5px',
});

const SaveIdText = styled.span((props) => ({
  color: theme.color.black.black300,
  fontSize: theme.typography.fontSizes.size200,
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights.line700,
  letterSpacing: theme.typography.letterSpacings.spacing200,
}));
