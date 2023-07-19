import styled from '@emotion/styled';

type InputTitleProps = {
  children: React.ReactNode;
};

const InputTitle = ({ children }: InputTitleProps) => {
  if (typeof children !== 'string') {
    return null;
  }
  return <InputTitleWrapper>{children ? children : ''}</InputTitleWrapper>;
};

const InputTitleWrapper = styled.span({
  display: 'inline-block',
  position: 'absolute',
  top: '-4px',
  left: '25px',
  backgroundColor: '#FFF',
  borderRadius: '100px',
  padding: '0 5px',
  justifyContent: 'center',
  alignItems: 'center',
  height: '21px',
  color: '#BABABA',
  fontSize: '12px',
  fontWeight: '400px',
});

export { InputTitle as default };
