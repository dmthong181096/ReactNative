import { initializeApp } from "firebase/app"
import { createContext, useContext, useState } from "react"
import { loginRequest,registerRequest } from "./authentication.service"
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";

export const AuthenticationContext = createContext()
export const AuthenticationContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null)
    const onLogin = (email, password) => {
        setIsLoading(true)

        signInWithEmailAndPassword(getAuth(), email, password)
        .then((user) => {
            console.log(email,password)
            // setUser(user)
            // setIsAuthenticated(true)
        }).catch((e) => {
            console.log(email,password)
            setError(e.toString())
            // setIsAuthenticated(false)
            console.log("errorss", error)
        })



        // if (loginRequest(email, password)!=undefined) {
        //     console.log(email,password)
        //     loginRequest(email, password)
        //         .then((user) => {
        //             console.log(email,password)
        //             // setUser(user)
        //             // setIsAuthenticated(true)
        //         }).catch((e) => {
        //             console.log(email,password)
        //             setError(e.toString())
        //             // setIsAuthenticated(false)
        //             console.log("errorss", error)
        //         })
        // }

    }
    const onRegister = (email,password) =>{
        console.log(email,password);
        if (registerRequest(email, password) != undefined) {
            registerRequest(email, password)
                .then(() => {
                    setUser(user)
                    setIsAuthenticated(true)
                }).catch((e) => {
                    setError(e)
                    setIsAuthenticated(false)
                    console.log("error", error.toString())
                })
        }
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
            }}

        >
            {children}
        </AuthenticationContext.Provider>
    )
}