import { useState } from 'react'
import mail from '../../json/mail.json'
import BasicModal from './modal'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



export function Proof({}) {

    let [number, setNumber] = useState([0, 3])
    let archive = []

    let hanldePrev = () => {
        if (number[0] === 0) {
            setNumber([9, 12])
        } else {
            setNumber([number[0] - 3, number[1] - 3])
        }
    }
    let hanldeNext = () => {
        if (number[1] === 12) {
            setNumber([0, 3])
        } else {
            setNumber([number[0] + 3, number[1] + 3])
        }
    }
    let handleArchive = (item) => {
        archive.unshift(item)
        console.log(archive)
    }


    return (
        <>
            <section style={{ background:'white', width:'90%', margin:'10px auto', padding:'10px' }} >
                <p style={{fontWeight:'700', fontSize:'20px', margin:'0 27px 10px'}}>Latest Review by Costumer</p>
                <article style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                <ArrowBackIosIcon onClick={hanldePrev} />
                {mail.slice(number[0], number[1]).map((item) => {
                    return (
                        <div style={{ width: '250px', backgroundColor: 'white', margin: '5px', padding: '10px',boxShadow:'1px 1px 5px gray' }} key={item.id}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ backgroundColor: '#63145f', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%', marginRight: '10px' }}><p style={{ color: 'white', }}>{item.name.slice(0, 1)}</p></div>
                                <div style={{}}>
                                    <p style={{fontSize: '13px'}}>{item.name}</p>
                            <p style={{fontSize: '13px'}}>Date: {item.date}</p>
                            <p style={{fontSize: '13px'}}>Id: {item.id}</p>
                                </div>
                            </div>
                            <p style={{fontSize:'14px'}} >Subject: {item.subject}</p>
                            <BasicModal />
                                    <p style={{fontSize: '13px', marginTop:'10px'}}>{item.email}</p>
                                    <p style={{fontSize: '13px', marginBottom:'10px'}}>{item.contact}</p>
                            <button style={{background:'#135846', color:'white',border:'none',padding:'10px', fontSize:'10px', borderRadius:'10px'}} onClick={()=>handleArchive(item)} >ARCHIVE</button>
                        </div >
                    )
                })}
                <ArrowForwardIosIcon onClick={hanldeNext} />
                </article>
            </section>
        </>

    )
}