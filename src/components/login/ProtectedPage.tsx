import useAuth from '@/src/context/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedPage: React.FC = () => {
  const { auth } = useAuth();

  const accessToken = auth.accessToken;
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router.push('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return null;
};

export default ProtectedPage;
