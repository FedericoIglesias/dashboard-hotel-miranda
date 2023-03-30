import booking from '../../json/booking.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {  NavLink } from 'react-router-dom';


export function Table() {

    let [page, setPage] = useState(1)
    let book = booking.slice(((10*page)-10),(10*page))
    

    return (
        <>
            <div style={{boxShadow:'1px 1px 5px black', width:'900px', margin:'auto'}}>
            <div style={{ display: 'flex', backgroundColor: 'white', padding:'10px', margin: 'auto' }}>
                <p style={{ width: '16%' }}>Guest</p>
                <p style={{ width: '14%' }}>Order Date</p>
                <p style={{ width: '14%' }}>Check In</p>
                <p style={{ width: '14%' }}>Check Out</p>
                <p style={{ width: '14%' }}>Special Request</p>
                <p style={{ width: '14%' }}>Room Type</p>
                <p style={{ width: '12%' }}>Status</p>
            </div>
            {book.map((item) => {
                return (

                    <div id={item.id} style={{ display: 'flex', backgroundColor: 'white', justifyContent: 'left', padding:'10px' }}>
                        <NavLink to={`/${item.id}`}style={{ width: '16%', color:'black', textDecoration:'none' }}><p >{item.name}</p></NavLink>
                        <p style={{ width: '14%',fontSize:'12px' }}>{item.orderDate}</p>
                        <p style={{ width: '14%',fontSize:'12px' }}>{item.checkIn}</p>
                        <p style={{ width: '14%',fontSize:'12px' }}>{item.checkOut}</p>
                        <p style={{ width: '14%' }}>lorem</p>
                        <p style={{ width: '14%' }}>{item.tipoHabitacion}Deluxe</p>
                        <p style={{ width: '12%' }}>{item.status == true? 'Check In' : 'Check Out'}</p>
                        <p style={{width: '2%'}}><MoreVertIcon/></p>
                    </div>

                )
            }
            )}
                    </div>
            <Stack spacing={2}  >
                <Pagination style={{margin:'10px auto'}} count={Math.ceil(booking.length/10)} variant="outlined" onChange={(event,page) =>{ setPage(page); console.log(book)}}/>
            </Stack>
        </>
    )
}