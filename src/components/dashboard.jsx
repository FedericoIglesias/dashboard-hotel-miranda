import { Navigate, redirect } from "react-router"

import { Bar } from "./nav-bar/bar"


export function Dashboard (){

    const page = 'Dashboard'

        return(
            <>

        <Bar page={page}/>
        <p>Dashboard </p>
        <div><p>Reservation</p></div>
        <div><p>Check in</p></div>
        <div><p>Check out</p></div>
        <div><p>Ocupado</p></div>
        </>
    )
}