'use client';

import { globalStyles } from '@/styles/GlobalStyle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      {globalStyles}
      <body>{children}</body>
    </html>
  );
}
