import {  createContext, useReducer } from "react";
import { LogReducer, userInitialState } from "./reducer/logReducer";


export const LogContext = createContext()


export function LogProvider ({children}) {

    const [log, dispatchLog] = useReducer(LogReducer, userInitialState)


    const data ={log, dispatchLog}


    return(
        <LogContext.Provider value={data}>
            {children}
        </LogContext.Provider>
    )

}