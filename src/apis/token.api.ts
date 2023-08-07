import httpClient from './httpClient';
import { User } from './login.api';

const TOKEN_URL = '/api/token';

export interface TokenResponse {
  user: Omit<User, 'password'>;
}

const tokenApi = async (body: any) => {
  return httpClient.post(TOKEN_URL, body, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });
};

export default tokenApi;
