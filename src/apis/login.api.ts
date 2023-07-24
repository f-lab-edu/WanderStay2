import httpClient from './httpClient';

const LOGIN_URL = '/auth/login';
const loginApi = async (body: any) => {
  return await httpClient.post(LOGIN_URL, body, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });
};

export default loginApi;
