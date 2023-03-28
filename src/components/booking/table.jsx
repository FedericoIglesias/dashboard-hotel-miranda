import booking from '../../json/booking.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


export function Table() {

    let [page, setPage] = useState(1)
    let book = booking.slice(((5*page)-5),(5*page))
    console.log(book)

    return (
        <>
            <div style={{ display: 'flex', width: '1000px', backgroundColor: 'white' }}>
                <p style={{ width: '16%' }}>Guest</p>
                <p style={{ width: '14%' }}>Order Date</p>
                <p style={{ width: '14%' }}>Check In</p>
                <p style={{ width: '14%' }}>Check Out</p>
                <p style={{ width: '14%' }}>Special Request</p>
                <p style={{ width: '14%' }}>Room Type</p>
                <p style={{ width: '14%' }}>Status</p>
            </div>
            {book.map((item) => {
                return (
                    <div id={item.id} style={{ display: 'flex', width: '1000px', backgroundColor: 'white', border: '1px solid balck' }}>
                        <p style={{ width: '16%' }}>{item.nombre}</p>
                        <p style={{ width: '14%' }}>{item.orderDate}</p>
                        <p style={{ width: '14%' }}>{item.checkIn}</p>
                        <p style={{ width: '14%' }}>{item.checkOut}</p>
                        <p style={{ width: '14%' }}>lorem</p>
                        <p style={{ width: '14%' }}>{item.tipoHabitacion}</p>
                        <p style={{ width: '14%' }}>{item.status}</p>
                    </div>

                )
            }
            )}
            <Stack spacing={2} >
                <Pagination count={booking.length/5} variant="outlined" onChange={(event,page) =>{ setPage(page); console.log(book)}}/>
            </Stack>
        </>
    )
}