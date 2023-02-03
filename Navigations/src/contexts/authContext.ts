import React from 'react';
export interface AuthContextInterface {
  isLogin: boolean;
  isLogout: boolean;
  login: () => void;
}

export const AuthContext = React.createContext<AuthContextInterface>({
  isLogin: false,
  isLogout: false,
  login: () => {},
});
