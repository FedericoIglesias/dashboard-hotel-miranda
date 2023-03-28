import { Bar } from "../nav-bar/bar"
import { Table } from "./table"


export function Booking() {

    const page = 'Booking'

    return (
        <>
            <Bar page={page} />
            <Table/>
        </>
    )
}