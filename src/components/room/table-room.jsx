import rooms from '../../json/rooms.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import room1 from '../../assets/room1.webp'
import styled from 'styled-components';




const TableRoom = () => {

    let [page, setPage] = useState(1)

    let room = rooms.slice(((2 * page) - 2), (2 * page))

    let handleDelete = () => {
        console.log('i will delete you')
    }
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
            <section style={{width:'90%', margin:'auto'}}>

                <Row>
                    <p style={{ width: '300px' }}>Room Name</p>
                    <p style={{ width: '140px' }}>Bed Type</p>
                    <p style={{ width: '140px' }}>Room Floor</p>
                    <p style={{ width: '140px' }}>Facilities</p>
                    <p style={{ width: '140px' }}>Rate</p>
                    <p style={{ width: '140px', padding: '0 30px' }}>Status</p>
                </Row>

                {room.map((item) => {
                    return (
                        <Row key={item.idHabitacion} >
                            <div style={{ width: '300px', display: 'flex', alignItems: 'center', margin:'3px 0' }}>
                                <img src={room1} alt="" style={{ width: '100px', height: '70px', borderRadius: '5px', marginRight: '10px' }} />
                                <p>{item.idHabitacion}</p>
                            </div>
                            <p style={{ width: '140px', paddingLeft: '12px' }}>{item.roomType}</p>
                            <p style={{ width: '140px', paddingLeft: '12px' }}>Floor A1</p>
                            <p style={{ width: '140px', fontSize: '10px', paddingLeft: '12px' }}>{item.amenities}</p>
                            <p style={{ width: '140px', paddingLeft: '12px' }}>${item.price}</p>
                            <p style={item.status == 'Available' ? { backgroundColor: '#0af248', borderRadius: '10px', height: '23px' } : { backgroundColor: '#fa0202', borderRadius: '10px', height: '23px' }} >
                                <span style={{paddingLeft: '12px', color: 'white', textAlign: 'center', padding: '30px 10px', width: '125px' }}>{item.status}</span>
                            </p>
                            <div onClick={() => handleDelete()} ><MoreVertIcon /></div>
                        </Row>

                    )
                }
                )}
                <Stack spacing={2} >
                    <Pagination style={{margin:' 10px auto'}} count={Math.ceil(rooms.length / 2)} variant="outlined" onChange={(event, page) => { setPage(page) }} />
                </Stack>
            </section>
        </>
    )
}

export default TableRoom
