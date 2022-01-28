import React, { createContext, ReactNode, useContext, useState } from 'react';

import * as AuthSession from 'expo-auth-session';

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
  signInWithGoogle(): Promise<void>;
}

interface AuthorizationReponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  async function signInWithGoogle() {
    try {
      const CLIENT_ID = '476633721089-uskmh1acd9g1d8mbdudtlps1go277ld7.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@bruno-fialho/gofinances';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = 
        `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = 
        await AuthSession.startAsync({ authUrl }) as AuthorizationReponse;

      if (type === 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const userInfo = await response.json();

        setUser({
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          photo: userInfo.picture
        });
      }
    } catch (error) {
      throw new Error('Erro ao logar com o Google');
    }
  }

  return (
    <AuthContext.Provider value={{
      user, 
      signInWithGoogle
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
