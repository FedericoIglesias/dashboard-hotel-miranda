import { Outlet, useNavigate } from "react-router-dom";
import { Login } from "./login";

export const ProtectedRoutes = () => {

    let usuario = localStorage.getItem('user')
    const navigate = useNavigate()

    if (!usuario) {
        return <Login/>
    } else {
        return <Outlet />;
    }


};

