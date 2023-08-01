import httpClient from './httpClient';

const LOGIN_URL = '/api/login';
const loginApi = async (body: any) => {
  return httpClient.post(LOGIN_URL, body, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });
};

export default loginApi;
