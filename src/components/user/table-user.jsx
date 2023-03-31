import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import founder from '../../assets/founder.jpg'
import CallIcon from '@mui/icons-material/Call';
import styled from 'styled-components';


export function TableUSer({template}) {

    let [page, setPage] = useState(1)
    let user = template.slice(((10*page)-10),(10*page))

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
        <section style={{width:'90%', margin:'auto'}}>
            <Row>
                <p style={{ width: '20%' }}>Name</p>
                <p style={{ width: '20%' }}>Job Desk</p>
                <p style={{ width: '20%' }}>Schedule</p>
                <p style={{ width: '20%' }}>Contact</p>
                <p style={{ width: '20%' }}>Status</p>
            </Row>
            {template.slice(((10*page)-10),(10*page)).map((item) => {
                return (
                    <Row key={item.id} >
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
                    </Row>

                )
            }
            )}
            <Stack spacing={2} >
                <Pagination style={{margin:'10px auto'}} count={Math.ceil(template.length/10)} variant="outlined" onChange={(event,page) =>{ setPage(page)}}/>
            </Stack>
        </section >
    )
}