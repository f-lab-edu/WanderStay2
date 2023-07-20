import { bodyText } from "@/src/ui-library/typography/bodyText";
import { color } from "./colors";
import { InputComponentProps } from "@/src/components/commons/Input";

type InputStyle = {
  default: InputDefaultStyle;
  category: InputCategory;
};
type InputDefaultStyle = Partial<React.CSSProperties>;
type InputPseudoSelector = {
  "&:focus": Partial<React.CSSProperties>;
};
type InputCategoryKey = InputComponentProps["category"];
type InputCategory = Record<
  InputCategoryKey,
  Partial<React.CSSProperties> & Partial<InputPseudoSelector>
>;

const inputDefaultStyle: InputDefaultStyle = {
  display: "flex",
  width: "315px",
  padding: "17px 20px",
  alignItems: "center",
  borderRadius: "15px",
};

const inputPseudoSelector: InputPseudoSelector = {
  "&:focus": {
    outline: "none",
    border: `1px solid ${color.brand.brand500}`,
  },
};

const inputCategory: InputCategory = {
  text: {
    ...inputPseudoSelector,
    color: color.black.black900,
    border: `1px solid ${color.black.black200}`,
    backgroundColor: color.black.black0,
    ...bodyText.bodyText200,
  },
  password: {
    ...inputPseudoSelector,
    color: color.black.black900,
    border: `1px solid ${color.black.black200}`,
    backgroundColor: color.black.black0,
    ...bodyText.bodyText200,
  },
  search: {
    color: color.black.black300,
    border: "none",
    backgroundColor: color.black.black100,
    outline: "none",
    ...bodyText.bodyText200,
  },
};

const inputStyle: InputStyle = {
  default: inputDefaultStyle,
  category: inputCategory,
};

export { inputStyle as default };
