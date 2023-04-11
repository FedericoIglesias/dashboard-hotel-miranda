import { Outlet } from "react-router-dom";
import { Login } from "./login";
import { useContext } from "react";
import { LogContext } from "../components/logContext";

export const ProtectedRoutes = () => {


    const {log} = useContext(LogContext)

    

    if (!log.auth) {
        return <Login/>
    } else {
        return <Outlet />;
    }


};

