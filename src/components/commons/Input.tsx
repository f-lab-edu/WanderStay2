import styled from "@emotion/styled";
import inputStyle from "@/src/ui-library/customize/input";
import InputTitle from "./InputTitle";

export interface InputComponentProps extends React.ComponentProps<"input"> {
  inputBoxSize: "sm" | "lg";
  inputTitle: string;
  isHide: boolean;
  category: Extract<
    React.HTMLInputTypeAttribute,
    "text" | "password" | "search"
  >;
}

type InputProps = Partial<InputComponentProps>;

type WapperProps = Pick<
  InputComponentProps,
  "inputBoxSize" | "isHide" | "category"
>;

export const Input = ({
  inputBoxSize = "lg",
  isHide = false,
  title,
  category = "text",
  ...props
}: InputProps) => {
  return (
    <Wrapper>
      <InputTitle>{title}</InputTitle>
      <InputWrapper
        inputBoxSize={inputBoxSize}
        isHide={isHide}
        category={category}
        type={props.type}
        size={props.size}
        value={props.value}
        onChange={props.onChange}
        style={props.style}
      ></InputWrapper>
    </Wrapper>
  );
};

const InputWrapper = styled.input<WapperProps>((props) => ({
  ...inputStyle.default,
  ...inputStyle.category[props.category],
}));

const Wrapper = styled.div({
  display: "inline-block",
  margin: "12px",
  position: "relative",
});
