import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const onLogin = (email, password) => {
    setIsLoading(true);
    if (loginRequest(email, password) != undefined) {
      loginRequest(email, password)
        .then((user) => {
          setUser(user);
          setError(null);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          setError(e.code.toString());
          setIsAuthenticated(false);
        });
    }
  };
  const onRegister = (email, password) => {
    if (registerRequest(email, password) != undefined) {
      registerRequest(email, password)
        .then(() => {
          setUser(user);
          setError(null);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          setError(e.code.toString());
          setIsAuthenticated(false);
        });
    }
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
