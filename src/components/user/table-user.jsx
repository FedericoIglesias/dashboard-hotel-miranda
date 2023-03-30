import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import founder from '../../assets/founder.jpg'
import CallIcon from '@mui/icons-material/Call';


export function TableUSer({template}) {

    let [page, setPage] = useState(1)
    let user = template.slice(((10*page)-10),(10*page))

    

    return (
        <section style={{margin: 'auto', width: '900px', borderRadius:'10px', backgroundColor:'white'}}>
            <div style={{ display: 'flex', borderBottom:'1px solid gray', padding: '10px' }}>
                <p style={{ width: '20%' }}>Name</p>
                <p style={{ width: '20%' }}>Job Desk</p>
                <p style={{ width: '20%' }}>Schedule</p>
                <p style={{ width: '20%' }}>Contact</p>
                <p style={{ width: '20%' }}>Status</p>
            </div>
            {template.slice(((10*page)-10),(10*page)).map((item) => {
                return (
                    <div id={item.id} style={{ display: 'flex', padding:'10px 0', borderBottom:'1px solid gray' }}>
                        <div style={{ width: '20%', display: 'flex', fontSize: '10px' }}>
                            <img src={founder} alt="profile" style={{width:'25px'}} />
                            <div>
                                <p>{item.name}</p>
                                <p>{item.id}</p>
                                <p>{item.startDate}</p>
                            </div>
                        </div>
                        <p style={{ width: '20%' }}>{item.description}</p>
                        <p style={{ width: '20%' }}>Monday</p>
                        <p style={{ width: '20%' }}><CallIcon/>{item.conctac} </p>
                        <p style={{ width: '18%', fontWeight:'700' }  }><span style={item.status == true ? {color:'#5AD07A'}: {color: '#E23428'}}>{item.status == true? 'Active' : 'Inactive'}</span></p>
                        <MoreVertIcon/>
                    </div>

                )
            }
            )}
            <Stack spacing={2} >
                <Pagination style={{margin:'10px auto'}} count={Math.ceil(template.length/10)} variant="outlined" onChange={(event,page) =>{ setPage(page)}}/>
            </Stack>
        </section >
    )
}