import {  createContext, useReducer } from "react";
import { LoginReducer, userInitialState } from "../reducer/loginReducer";


export const LoginContext = createContext()


export function LoginProvider ({children}) {

    const [login, dispatchLogin] = useReducer(LoginReducer, userInitialState)


    const data ={login, dispatchLogin}


    return(
        <LoginContext.Provider value={data}>
            {children}
        </LoginContext.Provider>
    )

}