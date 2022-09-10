import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, logoutRequest } from "./authentication.service";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      setUser(user)
      setIsAuthenticated(true)
    } else {

    }
  });


  const onLogin = (email, password) => {
    setIsLoading(true);
    if (loginRequest(email, password) != undefined) {
      loginRequest(email, password)
        .then((user) => {
          setUser(user);
          setError(null);
          setIsLoading(false);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          setIsLoading(false);
          setError(e.code.toString());
          setIsAuthenticated(false);
        });
    }
  };
  const onRegister = (email, password, confirmPassword) => {
    if (registerRequest(email, password) != undefined) {
      setIsLoading(true);
      if (password!= confirmPassword) {
        setIsLoading(false);
          setError("Confirm password not correct!!")
          return;
      }

      registerRequest(email, password)
        .then(() => {
          setIsLoading(false);
          setUser(user);
          setError(null);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          setIsLoading(false);
          setError(e.code.toString());
          setIsAuthenticated(false);
        });
    }
  };

  const onLogout =()=>{
    logoutRequest().then(()=>{
      setUser(null)
      setIsAuthenticated(false);
      console.log("LOGOUT SCUCCESS!");

    }).catch ((e)=>{
        console.log("LOGOUT FAIL!");
    })
  }
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
