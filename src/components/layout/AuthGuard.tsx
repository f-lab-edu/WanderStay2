import useAuth from '@/src/context/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const AuthGuard = ({ children }: React.PropsWithChildren) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`/auth/login?from=${encodeURIComponent(router.asPath)}`);
    }
  });

  return <>{children}</>;
};
