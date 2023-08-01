import React, { useEffect } from 'react';

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

export default function Home({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.headers.cookie
    ? req.headers.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
    : null;

  const isAuthenticated = !!token;

  return {
    props: {
      isAuthenticated,
    },
  };
};
