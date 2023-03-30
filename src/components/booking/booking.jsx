import { Bar } from "../nav-bar/bar"
import { Table } from "./table"
import booking from '../../json/booking.json'

export function Booking() {

    const page = 'Booking'
    console.log(booking)

    let handleOrder = (state) => {
        switch (state) {
            case 'book':
                booking.sort((a, b) => new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime())
                console.log(booking)
                break
            case 'in':
                booking.sort((a, b) => { return  a.checkIn - b.checkIn })
                console.log(booking)
                break
            case 'out':
                booking.sort((a, b) => { return a.checkOut - b.checkOut })
                console.log(booking)
                break
            case 'progres':
                booking.sort((a, b) => { return a.status - b.status })
                console.log(booking)
                break
            default:
                console.log(booking)
        }
    }

    return (
        <>
            <Bar page={page} />
            <section style={{display:'flex', backgroundColor: 'white', margin: '20px 10px', width: '50%', justifyContent:'space-around'}}>
                <p onClick={() => handleOrder('book')}>All Booking</p>
                <p onClick={() => handleOrder('in')}>Checking In</p>
                <p onClick={() => handleOrder('out')}>Checking Out</p>
                <p onClick={() => handleOrder('progres')}>In Progress</p>
            </section>
            <Table/>
        </>
    )
}