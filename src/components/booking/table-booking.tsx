
import React,{ FC, useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { SelectPage } from '../select-page';
import { searchBooking } from '../../features/bookingSlice';
import { useDispatch, useSelector } from 'react-redux';


const styleColumn = { width: '14%' }

const styleIn = {
    backgroundColor: '#5AD07A50',
    borderRadius: '10px',
    paddingLeft: '12px',
    color: '#5AD07A',
    textAlign: 'center',
    padding: '10px 10px',
    width: '125px',
    fontWeight: 700
}
const styleOut = {
    backgroundColor: '#E2342850',
    borderRadius: '10px',
    paddingLeft: '12px',
    color: '#E23428',
    textAlign: 'center',
    padding: '10px 10px',
    width: '125px',
    fontWeight: 700
}

    const Row = styled.div`
        display: flex;
        padding: 10px;
        background-color: white;
        border-radius: 10px;
        align-items: center;
        :hover{
            box-shadow: 1px 1px 5px gray;
            transform: Scale(1.02);
        }
        `;

export const Table: FC = (): JSX.Element => {

    const [page, setPage] = useState<number>(1)
    const booking = useSelector(store => store.booking)
    const dispatch = useDispatch()

    const book = booking.slice(((10 * page) - 10), (10 * page))

useEffect(() => {
    dispatch(searchBooking())
},[])

    const handleDelete = () => {
    }


    return (
        <>
            <section style={{ width: '90%', margin: 'auto' }}>

                <Row>
                    <p style={{ width: '16%' }}>Guest</p>
                    <p style={styleColumn}>Order Date</p>
                    <p style={styleColumn}>Check In</p>
                    <p style={styleColumn}>Check Out</p>
                    <p style={styleColumn}>Special Request</p>
                    <p style={styleColumn}>Room Type</p>
                    <p style={styleColumn}>Status</p>
                </Row>
                {book.map((item) => {
                    return (
                        <Row key={item.id} >
                            <NavLink to={`/dashboard-hotel-miranda/booking/${item.id}`} style={{ width: '16%', color: 'black', textDecoration: 'none' }}>
                                <p >{item.name}</p>
                            </NavLink>
                            <p style={styleColumn}>{item.orderDate}</p>
                            <p style={styleColumn}>{item.checkIn}</p>
                            <p style={styleColumn}>{item.checkOut}</p>
                            <p style={styleColumn}>lorem</p>
                            <p style={styleColumn}>{item.tipoHabitacion}Deluxe</p>
                            <p style={item.status === true ? styleIn : styleOut}>
                                {item.status === true ? 'Check In' : 'Check Out'}
                            </p>
                            <div onClick={() => handleDelete()} ><MoreVertIcon /></div>
                        </Row>

                    )
                }
                )}
                <SelectPage array={booking} setNp={setPage} show={book} />
            </section>
        </>
    )
}