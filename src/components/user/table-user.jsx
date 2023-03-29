import users from '../../json/users.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {  NavLink } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';


export function TableUSer() {

    let [page, setPage] = useState(1)
    let user = users.slice(((10*page)-10),(10*page))
    

    return (
        <>
            <div style={{ display: 'flex', width: '1000px', backgroundColor: 'white' }}>
                <p style={{ width: '20%' }}>Name</p>
                <p style={{ width: '20%' }}>Job Desk</p>
                <p style={{ width: '20%' }}>Schedule</p>
                <p style={{ width: '20%' }}>Contact</p>
                <p style={{ width: '20%' }}>Status</p>
            </div>
            {user.map((item) => {
                return (
                    <div id={item.id} style={{ display: 'flex', width: '1000px', backgroundColor: 'white', borderBlock: '2px solid balck' }}>
                        <div style={{ width: '20%', display: 'flex', fontSize: '10px' }}>
                            <img src="" alt="profile" />
                            <div>
                                <p>{item.name}</p>
                                <p>{item.id}</p>
                                <p>{item.startDate}</p>
                            </div>
                        </div>
                        <p style={{ width: '20%' }}>{item.description}</p>
                        <p style={{ width: '20%' }}>Monday</p>
                        <p style={{ width: '20%' }}><CallIcon/>{item.contact}</p>
                        <p style={{ width: '20%' }}>{item.status}</p>
                        <MoreVertIcon/>
                    </div>

                )
            }
            )}
            <Stack spacing={2} >
                <Pagination count={Math.ceil(users.length/10)} variant="outlined" onChange={(event,page) =>{ setPage(page)}}/>
            </Stack>
        </>
    )
}