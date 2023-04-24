import { Outlet } from "react-router-dom";
import { Login } from "./login";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";

export const ProtectedRoutes = () => {


    const {login} = useContext(LoginContext)


    if (!login.auth) {
        return <Login/>
    } else {
        return <Outlet />;
    }


};

