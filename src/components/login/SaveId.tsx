import styled from '@emotion/styled';
import { theme } from '@/src/ui-library/theme';

export default function SaveId() {
  return (
    <Wrapper>
      <CheckBoxWrapper>
        <HiddenCheckbox type='checkbox' />
      </CheckBoxWrapper>
      <SaveIdText>아이디 저장</SaveIdText>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  display: 'flex',
  alignContent: 'center',
});

const HiddenCheckbox = styled.input`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
`;

const CheckBoxWrapper = styled.label`
  display: flex;
  align-items: center;
  height: 18px;
  width: 18px;
  border: 2px solid ${({ theme }) => theme.color.black.black100};
  margin-right: 5px;
  &:checked {
    background-color: ${({ theme }) => theme.color.black.black0};
    border-color: ${({ theme }) => theme.color.success.success600};
    opacity: 1;
  }
`;

const SaveIdText = styled.span((props) => ({
  color: theme.color.black.black300,
  fontSize: theme.typography.fontSizes.size200,
  fontWeight: theme.typography.fontWeights.regular,
  lineHeight: theme.typography.lineHeights.line700,
  letterSpacing: theme.typography.letterSpacings.spacing200,
}));
