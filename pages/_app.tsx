import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyle';
import { useIsMobile } from '@/hooks/useMediaQuery';
import NotAllowed from '@/components/NotAllowed';

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useIsMobile();
  return (
    <div>
      <Global styles={globalStyles} />
      {isMobile ? (
        <Component {...pageProps} />
      ) : (
        <NotAllowed text={'모바일 환경만 지원합니다.'} />
      )}
    </div>
  );
}
