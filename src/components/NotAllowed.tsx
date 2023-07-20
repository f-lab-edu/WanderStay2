/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type NotAllowedProps = {
  text: string;
};

export default function NotAllowed({ text }: NotAllowedProps) {
  return (
    <div
      css={css({
        background: 'black',
        fontSize: '50px',
        color: 'white',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      {text}
    </div>
  );
}
