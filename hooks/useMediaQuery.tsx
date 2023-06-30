import { useMediaQuery } from 'react-responsive';

export function useIsMobile() {
  return useMediaQuery({ query: '(max-width: 760px)' });
}

export function useIsTablet() {
  return useMediaQuery({ query: '(max-width: 1279px)' });
}
