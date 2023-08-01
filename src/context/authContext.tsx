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

interface ProviderProps {
  children: ReactNode;
}

interface AuthState {
  user?: User;
  accessToken: string;
}

interface ContextProps {
  auth: AuthState;
  setAuth: Dispatch<SetStateAction<AuthState>>;
}

const AuthContext = createContext<ContextProps>({
  auth: {
    accessToken: '',
  },
  setAuth: () => {
    return null;
  },
});

export const AuthProvider = ({ children }: ProviderProps) => {
  const [auth, setAuth] = useState({
    accessToken: '',
  });

  useEffect(() => {
    const savedToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    setAuth({ accessToken: savedToken });
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
