import React, { createContext, ReactNode, useContext } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: UserProps;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const  user = {
    id: '12321',
    name: 'John Doe',
    email: 'john@doe.com',
  };

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
