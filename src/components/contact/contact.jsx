import { Bar } from "../nav-bar/bar"
import { Proof } from "./proof"
import { TableContact } from "./table-contact"

export function Contact (){

    const page = 'Contact'


    return(
        <>
        <Bar page={page}/>
        <Proof/>
        <TableContact/>
        </>
    )
}