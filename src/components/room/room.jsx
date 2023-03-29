import { Bar } from "../nav-bar/bar"
import TableRoom from "./table-room"
import { NavLink } from "react-router-dom"

export function Room (){

    const page = 'Room'


    return(
        <>
        <Bar page={page}/>
        <div>
            <NavLink to={'/new-room'}>New Room</NavLink>
        </div>
        <TableRoom/>
        </>
    )
}