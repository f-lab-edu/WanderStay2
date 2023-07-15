import styled from '@emotion/styled';

interface InputProps extends React.ComponentProps<'input'> {
  inputBoxSize: 'sm' | 'lg';
  isHide: boolean;
}
type InputComponentProps = Partial<InputProps>;
type WapperProps = Pick<InputProps, 'inputBoxSize' | 'isHide' | 'type'>;

export const Input = ({
  type = 'text',
  inputBoxSize = 'lg',
  isHide = false,
  ...props
}: InputComponentProps) => {
  return (
    <Wrapper
      inputBoxSize={inputBoxSize}
      isHide={isHide}
      type={type}
      value={props.value}
      onChange={props.onChange}
    ></Wrapper>
  );
};

const Wrapper = styled.input<WapperProps>((props) => ({}));
