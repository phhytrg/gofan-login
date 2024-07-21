import { createContext, useMemo } from 'react';
import { JwtPayload } from '../models/jwt-payload';
import { authService } from '../services';
import { useLocalStorage } from '../../../shared/hooks';

type AuthContextProps = {
  user?: JwtPayload;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const res = await authService.login({ email, password });

    console.log(res);

    setUser(res.user);
    localStorage.setItem('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
