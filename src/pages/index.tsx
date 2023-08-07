import React, { useEffect } from 'react';

import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { authServerSideProps } from '../utils/authServerSideProps';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

const homeServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {},
  };
};

export const getServerSideProps: GetServerSideProps =
  authServerSideProps(homeServerSideProps);
