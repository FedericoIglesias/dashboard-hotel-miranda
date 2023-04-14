import { useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import room1 from '../../assets/room1.webp'
import styled from 'styled-components';
import { SelectPage } from '../select-page';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRooms } from '../../features/roomSlice';





const TableRoom = () => {

    const [np, setNp] = useState(1)
    const dispatch = useDispatch()
    const rooms = useSelector(store => store.room.rooms)
    
    
    useEffect(() => {
        dispatch(fetchRooms())
    }, [rooms])
    
    
    let room = rooms.slice(((10 * np) - 10), (10 * np))

    const handleDelete = () => {
        console.log('i will delete you')
    }
    const Row = styled.div`
        display: flex;
        padding: 10px;
        background-color: white;
        border-radius: 10px;
        align-items: center;
        :hover{
            transform: Scale(1.02);
            box-shadow: 1px 1px 5px gray;
        }
        `;

    const styleAvai = {
        backgroundColor: '#5AD07A',
        borderRadius: '10px',
        paddingLeft: '12px',
        color: 'white',
        textAlign: 'center',
        padding: '10px 10px',
        width: '125px',
    }
    const styleBooked = {
        borderRadius: '10px',
        paddingLeft: '12px',
        color: 'white',
        textAlign: 'center',
        padding: '10px 10px',
        width: '125px',
        backgroundColor: '#E23428'
    }

    const styleImg = {
        width: '100px',
        height: '70px',
        borderRadius: '5px',
        marginRight: '10px'
    }

    const styleColumn = { width: '12%' }



    return (
        <>
            <section style={{ width: '90%', margin: 'auto' }}>

                <Row>
                    <p style={{ width: '26%' }}>Room Name</p>
                    <p style={styleColumn}>Bed Type</p>
                    <p style={styleColumn}>Room Floor</p>
                    <p style={styleColumn}>Facilities</p>
                    <p style={styleColumn}>Rate</p>
                    <p style={styleColumn}>Status</p>
                </Row>

                {room.map((item) => {
                    return (
                        <Row key={item.idHabitacion} >
                            <div style={{ width: '26%', display: 'flex', alignItems: 'center', margin: '3px 0' }}>
                                <img src={room1} alt="" style={styleImg} />
                                <p>{item.idHabitacion}</p>
                            </div>
                            <p style={styleColumn}>{item.roomType}</p>
                            <p style={styleColumn}>Floor A1</p>
                            <p style={{ width: '13%', fontSize: '10px' }}>{item.amenities}</p>
                            <p style={styleColumn}>${item.price}</p>
                            <p style={item.status === 'Available' ? styleAvai : styleBooked} >{item.status}</p>
                            <div onClick={() => handleDelete()} ><MoreVertIcon /></div>
                        </Row>

                    )
                }
                )}

                <SelectPage array={rooms} setNp={setNp} show={room} />
            </section >
        </>
    )
}

export default TableRoom
