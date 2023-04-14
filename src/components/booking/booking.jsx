import { Table } from "./table-booking"
import booking from '../../json/booking.json'

export function Booking() {

    

    const handleOrder = (state) => {
        switch (state) {
            case 'book':
                booking.sort((a, b) => new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime())
                break
            case 'in':
                booking.sort((a, b) => { return  a.checkIn - b.checkIn })
                break
            case 'out':
                booking.sort((a, b) => { return a.checkOut - b.checkOut })
                break
            case 'progres':
                booking.sort((a, b) => { return a.status - b.status })
                break
            default:
        }
    }

    return (
        <>
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