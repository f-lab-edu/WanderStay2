import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export const authServerSideProps = (gssp: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    const accessToken = context.req.cookies['token'];

    if (!accessToken) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    }

    return await gssp(context);
  };
};
