import mail from '../../json/mail.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import BasicModal from './modal'




export function TableContact() {

    let [page, setPage] = useState(1)
    let mails = mail.slice(((10*page)-10),(10*page))
    

    return (
        <>
            <div style={{ display: 'flex', width: '1000px', backgroundColor: 'white' }}>
                <p style={{ width: '20%' }}>Order Id</p>
                <p style={{ width: '20%' }}>Date</p>
                <p style={{ width: '20%' }}>Customer</p>
                <p style={{ width: '20%' }}>Coments</p>
                <p style={{ width: '20%' }}>Action</p>
            </div>
            {mails.map((item) => {
                return (
                    <div id={item.id} style={{ display: 'flex', width: '1000px', backgroundColor: 'white', borderBlock: '2px solid balck' }}>
                        <p style={{ width: '20%' }}>{item.id}</p>
                        <p style={{ width: '20%' }}>{item.date}</p>
                        <p style={{ width: '20%' }}>{item.name}</p>
                        <p style={{ width: '20%' }}><BasicModal/></p>
                        <p style={{ width: '20%' }}>Archive</p>
                    </div>

                )
            }
            )}
            <Stack spacing={2} >
                <Pagination count={Math.ceil(mail.length/10)} variant="outlined" onChange={(event,page) =>{ setPage(page)}}/>
            </Stack>
        </>
    )
}