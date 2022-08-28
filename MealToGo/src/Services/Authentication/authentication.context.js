import { initializeApp } from "firebase/app"
import { createContext, useContext, useState } from "react"
import { logiRequest } from "./authentication.service"

export const AuthenticationContext = createContext()
export const AuthenticationContextProvider = ({ children }) => {

    const [isLoading, seiIsLoading] = useState(false)
    const [user, setUser] = useState (null);
    const [error, setError] = useState(null)
    const onLogin =(email,password) =>{

        logiRequest(email,password).then((user)=>{
            setUser(user)
        }).catch( (e)=>{
            console.log(e)
        })
    }
    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
            }}
        
        >
            {children}
        </AuthenticationContext.Provider>
    )
}