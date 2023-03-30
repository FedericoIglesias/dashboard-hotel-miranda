import rooms from '../../json/rooms.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import room1 from '../../assets/room1.webp'



const TableRoom = () => {

    let [page, setPage] = useState(1)

    let room = rooms.slice(((2 * page) - 2), (2 * page))

    let handleDelete = () => {
        console.log('i will delete you')
    }


    return (
        <>

            <div style={{ display: 'flex', width: '1000px', backgroundColor: 'white', padding: '10px' }}>
                <p style={{ width: '300px' }}>Room Name</p>
                <p style={{ width: '140px' }}>Bed Type</p>
                <p style={{ width: '140px' }}>Room Floor</p>
                <p style={{ width: '140px' }}>Facilities</p>
                <p style={{ width: '140px' }}>Rate</p>
                <p style={{ width: '140px', padding: '0 30px' }}>Status</p>
            </div>

            {room.map((item) => {
                return (
                    <div id={item.id} style={{ display: 'flex', alignItems: 'center', width: '1000px', backgroundColor: 'white', borderBlock: '2px balck solid', padding: '10px' }}>
                        <div style={{ width: '300px', display: 'flex', alignItems: 'center' }}>
                            <img src={room1} alt="" style={{ width: '100px', height: '70px', borderRadius: '5px', marginRight: '10px' }} />
                            <p>{item.idHabitacion}</p>
                        </div>
                        <p style={{ width: '140px', paddingLeft: '12px' }}>{item.roomType}</p>
                        <p style={{ width: '140px', paddingLeft: '12px' }}>Floor A1</p>
                        <p style={{ width: '140px', fontSize: '10px', paddingLeft: '12px' }}>{item.amenities}</p>
                        <p style={{ width: '140px', paddingLeft: '12px' }}>${item.price}</p>
                        <p style={item.status == 'Available'? {backgroundColor: '#5AD07A', borderRadius: '10px'} : {backgroundColor: '#E23428', borderRadius: '10px'}} >
                            <p style={{ width: '130px', paddingLeft: '12px', color: 'white', textAlign:'center', padding: '5px 25px', maxWidth: '125px'}}>{item.status}</p>
                        </p>
                        <div onClick={handleDelete} ><MoreVertIcon /></div>
                    </div>

                )
            }
            )}
            <Stack spacing={2} >
                <Pagination count={Math.ceil(rooms.length / 2)} variant="outlined" onChange={(event, page) => { setPage(page) }} />
            </Stack>
        </>
    )
}

export default TableRoom
