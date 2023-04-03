import mail from '../../json/mail.json'
import { useState } from 'react';
import BasicModal from './modal'
import styled from 'styled-components';
import { SelectPage } from '../select-page';




export function TableContact() {

    const [page, setPage] = useState(1)
    let mails = mail.slice(((10 * page) - 10), (10 * page))
    let archive = []
    const handleArchive = (item) => {
        archive.unshift(item)
        console.log(archive)
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


    return (
        <>
            <section style={{ width: '90%', margin: 'auto' }}>

                <Row>
                    <p style={{ width: '20%' }}>Order Id</p>
                    <p style={{ width: '20%' }}>Date</p>
                    <p style={{ width: '20%' }}>Customer</p>
                    <p style={{ width: '20%' }}>Coments</p>
                    <p style={{ width: '20%' }}>Action</p>
                </Row>
                {mails.map((item) => {
                    return (
                        <Row key={item.id} >
                            <p style={{ width: '20%' }}>{item.id}</p>
                            <p style={{ width: '20%' }}>{item.date}</p>
                            <p style={{ width: '20%' }}>{item.name}</p>
                            <p style={{ width: '20%' }}><BasicModal /></p>
                            <p style={{ width: '20%' }} onClick={() => handleArchive(item)}><span style={{ background: '#135846', color: 'white', border: 'none', padding: '10px', fontSize: '10px', borderRadius: '10px' }}> Archive</span></p>
                        </Row>
                    )
                }
                )}
                <SelectPage array={mail} show={mails} setNp={setPage} /> 
            </section>
        </>
    )
}