import { Outlet } from "react-router-dom";
import React from 'react'
import { Login } from "./login";
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";

export const ProtectedRoutes = () => {


    const {login} = useContext<any>(LoginContext)
    console.log(login);
    

    if (!login.token) {
        return <Login/>
    } else {
        return <Outlet />;
    }


};

