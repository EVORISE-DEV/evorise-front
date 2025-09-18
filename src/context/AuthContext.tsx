import React, { createContext, useState, useEffect, useContext } from 'react';
import { IUser } from '../services/user/UserService';
import { login as doLogin, logout as doLogout, getMe } from '../services/session/SessionService';

interface AuthContextType {
  user: IUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Buscar usuário autenticado ao iniciar o app
  useEffect(() => {
    (async () => {
      try {
        const user = await getMe();
        setUser(user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Função de login
  const login = async (email: string, password: string) => {
    await doLogin(email, password); // faz POST, backend seta cookie
    const user = await getMe(); // pega dados do user pelo cookie
    setUser(user);
  };

  // Função de logout
  const logout = async () => {
    await doLogout(); // faz POST ou GET para backend limpar cookie
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
