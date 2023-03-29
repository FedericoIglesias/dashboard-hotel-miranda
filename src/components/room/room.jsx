import { Bar } from "../nav-bar/bar"
import TableRoom from "./table-room"

export function Room (){

    const page = 'Room'


    return(
        <>
        <Bar page={page}/>
        <TableRoom/>
        </>
    )
}