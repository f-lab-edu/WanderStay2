import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface ProviderProps {
  children: ReactNode;
}

interface ContextProps {
  auth: any;
  setAuth: Dispatch<SetStateAction<{}>>;
}

const AuthContext = createContext<ContextProps>({
  auth: {},
  setAuth: () => {
    return null;
  },
});

export const AuthProvider = ({ children }: ProviderProps) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
