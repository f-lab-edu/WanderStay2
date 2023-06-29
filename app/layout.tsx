'use client';
import {Global} from '@emotion/react';
import { globalStyles } from '../styles/GlobalStyle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
      <>
        <Global styles={globalStyles}/>
        {children}
      </>
      </body>
    </html>
  );
}
