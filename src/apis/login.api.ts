import httpClient from './httpClient';

const LOGIN_URL = '/api/login';
export interface User {
  id: string;
  email: string;
  password: string;
}
export interface LoginResponse {
  user: User;
  token: string;
}
const loginApi = async (body: any) => {
  return httpClient.post(LOGIN_URL, body, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });
};

export default loginApi;
