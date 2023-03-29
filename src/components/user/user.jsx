import { Bar } from "../nav-bar/bar"
import { TableUSer } from "./table-user"
import { Link } from "react-router-dom"

export function User (){

    const page = 'User'

    return(
        <>
        <Bar page={page}/>
        <Link to={'/new-user'}>New User</Link>
        <TableUSer/>
        </>
    )
}