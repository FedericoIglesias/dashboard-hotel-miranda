import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import template from '../json/template.json'

export const ProtectedRoutes = () => {

    let usuario = localStorage.getItem('user')
    const navigate = useNavigate()

    if (!usuario) {
        navigate('/login')
    } else {
        return <Outlet />;
    }


};

