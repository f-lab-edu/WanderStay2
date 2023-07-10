import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

type BUTTON_TYPE = 'Primary' | 'Secondary' | 'Minimal';
type BUTTON_POSITION = 'Icon-Only' | 'None' | 'Left' | 'Right';
type BUTTON_SIZE = 'Large' | 'Medium' | 'Small';

type ButtonProps = {
  type: BUTTON_TYPE;
  size: BUTTON_SIZE;
  text: string;
  position?: BUTTON_POSITION;
  icon?: string;
  className?: string;
  isHover?: boolean;
  isActive?: boolean;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  className,
  text,
  type,
  icon,
  position = 'None',
  size,
  isActive,
  isHover,
  style,
  onClick,
}: ButtonProps) {
  return (
    <button className={className} style={style} onClick={onClick}>
      <LeftIcon position={position} icon={icon} />
      {text}
      <RightIcon position={position} icon={icon} />
    </button>
  );
}

export const DefaultButton = styled(Button)(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '0',
    flexGrow: '1',
    borderRadius: '15px',
  },
  (props) => ({
    ...setButtonType(props.type, props.isHover, props.isActive),
    ...setButtonSize(props.size),
  })
);

export function PrimaryButton({
  text,
  style,
  onClick,
}: Pick<ButtonProps, 'text' | 'style' | 'onClick'>) {
  return (
    <DefaultButton
      type='Primary'
      size='Large'
      text={text}
      style={style}
      onClick={onClick}
    />
  );
}

export function SecondaryButton({
  text,
  style,
  onClick,
}: Pick<ButtonProps, 'text' | 'style' | 'onClick'>) {
  return (
    <DefaultButton
      type='Secondary'
      size='Large'
      text={text}
      style={style}
      onClick={onClick}
    />
  );
}

export function LeftIcon({
  position,
  icon,
}: Pick<ButtonProps, 'position' | 'icon'>) {
  if (!icon) {
    return null;
  }
  return (
    <div>
      {position === 'Left' && (
        <Image
          src={icon}
          alt=''
          width={20}
          height={20}
          style={{ marginRight: '8px' }}
        />
      )}
    </div>
  );
}

export function RightIcon({
  position,
  icon,
}: Pick<ButtonProps, 'position' | 'icon'>) {
  if (!icon) {
    return null;
  }
  return (
    <div>
      {position === 'Right' && (
        <Image
          src={icon}
          alt=''
          width={20}
          height={20}
          style={{ marginLeft: '8px' }}
        />
      )}
    </div>
  );
}

const setButtonType = (
  type: BUTTON_TYPE,
  isHover: boolean = true,
  isActive: boolean = true
) => {
  switch (type) {
    case 'Primary':
      return {
        color: '#0C0507',
        backgroundColor: '#FCD240',
        border: 'none',
        '&:hover': isHover && {
          backgroundColor: '#D8AE2E',
        },
        '&:active': isActive && {
          backgroundColor: '#B58D20',
        },
      };
    case 'Secondary':
      return {
        color: '#0C0507',
        backgroundColor: '#FFF',
        border: '1px solid #E8E8E8',
        '&:hover': isHover && {
          border: '1px solid #767676',
        },
        '&:active': isActive && {
          border: '1px solid #E8E8E8',
          backgroundColor: '#F3F3F3',
        },
      };

    case 'Minimal':
      return {
        color: '#0C0507',
        backgroundColor: '#FCD240',
        '&:hover': isHover && {
          backgroundColor: '#D8AE2E',
        },
        '&:active': isActive && {
          backgroundColor: '#B58D20',
        },
      };
    default:
      return {
        color: '#0C0507',
        backgroundColor: '#FCD240',
        '&:hover': isHover && {
          backgroundColor: '#D8AE2E',
        },
        '&:active': isActive && {
          backgroundColor: '#B58D20',
        },
      };
  }
};

const setButtonSize = (size: BUTTON_SIZE) => {
  switch (size) {
    case 'Large':
      return {
        fontSize: '16px',
        fontWeight: '700',
        maxHeight: '52px',
        padding: '13px 24px',
      };
    case 'Medium':
      return {
        fontSize: '12px',
        fontWeight: '400',
        maxHeight: '43px',
        padding: '9px 16px',
      };
    case 'Small':
      return {
        fontSize: '12px',
        fontWeight: '400',
        maxHeight: '25px',
        padding: '9px 16px',
      };
    default:
      return {
        fontSize: '16px',
        fontWeight: '700',
        maxHeight: '52px',
        padding: '13px 24px',
      };
  }
};
