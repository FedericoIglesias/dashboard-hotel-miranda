import { Bar } from "./nav-bar/bar"


export function User (){

    const page = 'User'

    return(
        <>
        <Bar page={page}/>
        <p>User</p>
        </>
    )
}