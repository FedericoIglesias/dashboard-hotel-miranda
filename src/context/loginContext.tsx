import React, { FC } from 'react'
import {  createContext, useReducer } from "react";
import { LoginReducer, userInitialState } from "../reducer/loginReducer";


export const LoginContext = createContext({})


export const LoginProvider: FC<any> =  ({children}): JSX.Element => {

    const [login, dispatchLogin] = useReducer<any>(LoginReducer, userInitialState)


    const data ={login, dispatchLogin}


    return(
        <LoginContext.Provider value={data}>
            {children}
        </LoginContext.Provider>
    )

}