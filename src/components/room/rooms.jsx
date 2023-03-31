import TableRoom from "./table-room"
import { NavLink } from "react-router-dom"

export function Room (){




    return(
        <>
        <div >
            <button style={{padding: '13px 51px', backgroundColor: '#135846', border:'none', borderRadius:'10px', margin: '10px'}}><NavLink to={'/dashboard-hotel-miranda/new-room'} style={{color:'white', textDecoration:'none'}} >+New Room</NavLink></button>
        </div>
        <TableRoom/>
        </>
    )
}