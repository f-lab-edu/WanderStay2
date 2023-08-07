import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { User } from '../apis/login.api';
import Cookie from '../utils/cookie';
import axios, { AxiosResponse } from 'axios';
import tokenApi, { TokenResponse } from '../apis/token.api';

interface ProviderProps {
  children: ReactNode;
}

interface AuthState {
  user?: Omit<User, 'password'>;
  accessToken: string;
}

interface ContextProps {
  auth: AuthState;
  setAuth: Dispatch<SetStateAction<AuthState>>;
  isAuthenticated: boolean;
  setIsAuthenticate: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<ContextProps>({
  auth: {
    accessToken: '',
  },
  setAuth: () => {
    return null;
  },
  isAuthenticated: false,
  setIsAuthenticate: () => {
    return null;
  },
});

export const AuthProvider = ({ children }: ProviderProps) => {
  const [auth, setAuth] = useState<AuthState>({
    accessToken: '',
  });

  const [isAuthenticated, setIsAuthenticate] = useState(() => {
    const cookieFromCsr =
      typeof document !== 'undefined' ? document.cookie : '';
    if (!cookieFromCsr) {
      return false;
    }
    const token = new Cookie(cookieFromCsr).getCookieValue('token');
    return !!token;
  });

  useEffect(() => {
    const cookieFromCsr =
      typeof document !== 'undefined' ? document.cookie : '';

    if (!cookieFromCsr) {
      return setIsAuthenticate(false);
    }
    const initialize = async () => {
      const token = new Cookie(cookieFromCsr).getCookieValue('token');

      if (token) {
        try {
          const response: AxiosResponse<TokenResponse> = await tokenApi({
            token,
          });

          if (response.status === 200) {
            setAuth((prev) => {
              return { ...prev, accessToken: token };
            });
            setIsAuthenticate(true);
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            setIsAuthenticate(false);
          }
        }
      } else {
        setIsAuthenticate(false);
      }
    };

    initialize();
  }, []);
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isAuthenticated, setIsAuthenticate }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
