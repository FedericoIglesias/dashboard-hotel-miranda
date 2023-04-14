import { useEffect, useState } from 'react'
import BasicModal from './modal'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from '../../features/contactSlice';



export function Proof() {

    const [number, setNumber] = useState([0, 3])
    const archive = []
    const proofMail = useSelector(store => store.contact)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchContact())
    }, [])


    const hanldePrev = () => {
        if (number[0] === 0) {
            setNumber([9, 12])
        } else {
            setNumber([number[0] - 3, number[1] - 3])
        }
    }


    const hanldeNext = () => {
        if (number[1] === 12) {
            setNumber([0, 3])
        } else {
            setNumber([number[0] + 3, number[1] + 3])
        }
    }


    const handleArchive = (item) => {
        archive.unshift(item)
        console.log(archive)
    }

    const Proof = styled.section`
    background-color: white;
    width: 90%;
    margin: 10px auto ;
    padding: 10px;
    box-shadow: 1px 1px 5px gray;
    & article{
        display: flex;
        flex-wrap: wrap;
        align-items: center; 
    }
    `;

    const btnStyle = {
        background: '#135846',
        color: 'white',
        border: 'none',
        padding: '10px',
        fontSize: '10px',
        borderRadius: '10px'
    }

    const letterStyle = {
        backgroundColor: '#E23428',
        width: '50px', height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '100%',
        marginRight: '10px'
    }

    const proofStyle = {
        width: '250px',
        backgroundColor: 'white',
        margin: '5px auto',
        padding: '10px',
        boxShadow: '1px 1px 5px gray'
    }

    return (
        <>
            <Proof >
                <p style={{ fontWeight: '700', fontSize: '20px', margin: '0 27px 10px' }}>Latest Review by Costumer</p>
                <article >
                    <ArrowBackIosIcon onClick={() => hanldePrev()} />
                    {proofMail.slice(number[0], number[1]).map((item) => {
                        return (
                            <div style={proofStyle} key={item.id}>
                                <div style={{ display: 'flex' }}>
                                    <div style={letterStyle}><p style={{ color: 'white', }}>{item.name.slice(0, 1)}</p></div>
                                    <div>
                                        <p style={{ fontSize: '13px' }}>{item.name}</p>
                                        <p style={{ fontSize: '13px' }}>Date: {item.date}</p>
                                        <p style={{ fontSize: '13px' }}>Id: {item.id}</p>
                                    </div>
                                </div>
                                <p style={{ fontSize: '14px' }} >Subject: {item.subject}</p>
                                <BasicModal />
                                <p style={{ fontSize: '13px', marginTop: '10px' }}>{item.email}</p>
                                <p style={{ fontSize: '13px', marginBottom: '10px' }}>{item.contact}</p>
                                <button style={btnStyle} onClick={() => handleArchive(item)} >ARCHIVE</button>
                            </div >
                        )
                    })}
                    <ArrowForwardIosIcon onClick={() => hanldeNext()} />
                </article>
            </Proof>
        </>

    )
}