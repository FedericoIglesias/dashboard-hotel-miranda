import booking from '../../json/booking.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {  NavLink } from 'react-router-dom';
import styled from 'styled-components';


export function Table() {

    let [page, setPage] = useState(1)
    let book = booking.slice(((10*page)-10),(10*page))


    const Row = styled.div`
        display: flex;
        padding: 10px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 1px 1px 5px gray;
        align-items: center;
        margin: 5px;
        :hover{
            transform: Scale(1.02);
        }
        `;

    return (
        <>
            <section  style={{width:'90%', margin:'auto'}}>

            <Row>
                <p style={{ width: '16%' }}>Guest</p>
                <p style={{ width: '14%' }}>Order Date</p>
                <p style={{ width: '14%' }}>Check In</p>
                <p style={{ width: '14%' }}>Check Out</p>
                <p style={{ width: '14%' }}>Special Request</p>
                <p style={{ width: '14%' }}>Room Type</p>
                <p style={{ width: '12%' }}>Status</p>
            </Row>
            {book.map((item) => {
                return (
                    
                    <Row key={item.id} >
                        <NavLink to={`/dashboard-hotel-miranda/booking/${item.id}`}style={{ width: '16%', color:'black', textDecoration:'none' }}><p >{item.name}</p></NavLink>
                        <p style={{ width: '14%',fontSize:'12px' }}>{item.orderDate}</p>
                        <p style={{ width: '14%',fontSize:'12px' }}>{item.checkIn}</p>
                        <p style={{ width: '14%',fontSize:'12px' }}>{item.checkOut}</p>
                        <p style={{ width: '14%' }}>lorem</p>
                        <p style={{ width: '14%' }}>{item.tipoHabitacion}Deluxe</p>
                        <p style={{ width: '12%' }}>{item.status == true? 'Check In' : 'Check Out'}</p>
                        <p style={{width: '2%'}}><MoreVertIcon/></p>
                    </Row>

)
            }
            )}
            <Stack spacing={2}  >
                <Pagination style={{margin:'10px auto'}} count={Math.ceil(booking.length/10)} variant="outlined" onChange={(event,page) =>{ setPage(page); console.log(book)}}/>
            </Stack>
            </section>
        </>
    )
}