import rooms from '../../json/rooms.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import room1 from '../../assets/room1.webp'



const TableRoom = () => {

    let [page, setPage] = useState(1)


    let room = rooms.slice(((2 * page) - 2), (2 * page))


    return (
        <>

            <div style={{ display: 'flex', width: '1000px', backgroundColor: 'white' }}>
                <p style={{ width: '30%' }}>Room Name</p>
                <p style={{ width: '14%' }}>Bed Type</p>
                <p style={{ width: '14%' }}>Room Floor</p>
                <p style={{ width: '14%' }}>Facilities</p>
                <p style={{ width: '14%' }}>Rate</p>
                <p style={{ width: '14%' }}>Status</p>
            </div>
            {room.map((item) => {
                return (
                    <div id={item.id} style={{ display: 'flex', width: '1000px', backgroundColor: 'white', borderBlock: '2px solid balck' }}>
                        <div style={{ width: '30%', display: 'flex' }}>
                            <img src={room1} alt="" style={{ width: '70px', height:'70px' }} />
                            <p>{item.idHabitacion}</p>
                        </div>
                        <p style={{ width: '14%', textAlign: 'center' }}>{item.roomType}</p>
                        <p style={{ width: '14%', textAlign: 'center' }}>Floor A1</p>
                        <p style={{ width: '14%', fontSize: '10px', textAlign: 'center' }}>{item.amenities}</p>
                        <p style={{ width: '14%', textAlign: 'center' }}>{item.price}</p>
                        <p style={{ width: '14%', textAlign: 'center' }}>{item.status}</p>
                        <MoreVertIcon />
                    </div>

                )
            }
            )}
            <Stack spacing={2} >
                <Pagination count={rooms.length / 2} variant="outlined" onChange={(event, page) => { setPage(page) }} />
            </Stack>
        </>
    )
}

export default TableRoom