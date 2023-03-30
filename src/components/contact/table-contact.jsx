import mail from '../../json/mail.json'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import BasicModal from './modal'




export function TableContact() {

    let [page, setPage] = useState(1)
    let mails = mail.slice(((10*page)-10),(10*page))
    let archive = []
    let handleArchive = (item) => {
        archive.unshift(item)
        console.log(archive)
    }
    const row ={
        display: 'flex',
        padding:'10px',
        borderBottom:'1px gray solid',
        alignItems:'center'
    }


    return (
        <>
        <section style={{boxShadow:'1px 1px 5px black', width:'900px', margin:'auto', backgroundColor: 'white', borderRadius:'10px'}}>

            <div style={row}>
                <p style={{ width: '20%' }}>Order Id</p>
                <p style={{ width: '20%' }}>Date</p>
                <p style={{ width: '20%' }}>Customer</p>
                <p style={{ width: '20%' }}>Coments</p>
                <p style={{ width: '20%' }}>Action</p>
            </div>
            {mails.map((item) => {
                return (
                    <div key={item.id} style={row}>
                        <p style={{ width: '20%' }}>{item.id}</p>
                        <p style={{ width: '20%' }}>{item.date}</p>
                        <p style={{ width: '20%' }}>{item.name}</p>
                        <p style={{ width: '20%' }}><BasicModal/></p>
                        <p style={{ width: '20%'}} onClick={()=>handleArchive(item)}><span style={{background:'#135846', color:'white',border:'none',padding:'10px', fontSize:'10px', borderRadius:'10px'}}> Archive</span></p>
                    </div>
)
            }
            )}
            <Stack spacing={2} >
                <Pagination style={{margin:'10px auto'}} count={Math.ceil(mail.length/10)} variant="outlined" onChange={(event,page) =>{ setPage(page)}}/>
            </Stack>
            </section>
        </>
    )
}