import styled from '@emotion/styled';

type TextProps = Partial<React.ComponentProps<'span'>> & {
  children: 'string' | 'number';
};

type WrapperProps = Partial<React.ComponentProps<'span'>>;

const Text = ({ children, ...props }: TextProps) => {
  return <Wrapper style={props.style}>{children}</Wrapper>;
};

const Wrapper = styled.span<WrapperProps>((props) => ({}));

export { Text as default };
