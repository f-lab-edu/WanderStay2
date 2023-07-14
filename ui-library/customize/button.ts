import { CommonButtonProps } from '@/components/commons/Button';
import { color } from './colors';

type ButtonStyle = ButtonSize & ButtonDefault & BottonColor;

type ButtonColorCategory = CommonButtonProps['color'];
type BottonColor = {
  color: Record<ButtonColorCategory, any>;
};

type ButtonSizeCategory = CommonButtonProps['size'];
type ButtonSize = {
  size: Record<ButtonSizeCategory, Partial<React.CSSProperties>>;
};

type ButtonDefault = {
  default: Partial<React.CSSProperties>;
};

export const buttonStyle: ButtonStyle = {
  color: {
    primary: {
      color: color.black.black900,
      backgroundColor: color.brand.brand500,
      '&:hover': {
        backgroundColor: color.brand.brand600,
      },
      '&:active': {
        backgroundColor: color.brand.brand700,
      },
    },
    secondary: {
      color: color.black.black400,
      border: `1px solid ${color.black.black200}`,
      backgroundColor: color.black.black0,
      '&:hover': {
        color: color.black.black900,
        border: `1px solid ${color.black.black400}`,
        backgroundColor: color.black.black0,
      },
      '&:active': {
        color: color.black.black900,
        border: `1px solid ${color.black.black200}`,
        backgroundColor: color.black.black100,
      },
    },
    minimal: {
      color: color.black.black400,
      '&:hover': {
        color: color.black.black900,
        backgroundColor: color.black.black0,
      },
      '&:active': {
        color: color.black.black900,
        backgroundColor: color.black.black100,
      },
    },
  },
  size: {
    sm: {
      fontSize: '12px',
      fontWeight: '400',
      maxHeight: '25px',
      padding: '9px 16px',
    },
    md: {
      fontSize: '12px',
      fontWeight: '400',
      maxHeight: '43px',
      padding: '9px 16px',
    },
    lg: {
      fontSize: '16px',
      fontWeight: '700',
      maxHeight: '52px',
      padding: '13px 24px',
    },
  },
  default: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
  },
};
