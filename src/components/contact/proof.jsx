import { useState } from 'react'
import mail from '../../json/mail.json'
import BasicModal from './modal'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function Proof() {

    let [number, setNumber] = useState([0, 3])


    let hanldePrev = () => {
        if (number[0] === 0) {
            setNumber([9, 12])
        } else {
            setNumber([number[0] - 3, number[1] - 3])
            console.log(number)
        }
    }
    let hanldeNext = () => {
        if (number[1] === 12) {
            setNumber([0, 3])
        } else {
            setNumber([number[0] + 3, number[1] + 3])
            console.log(number)
        }
    }


    return (
        <>
            <section style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center' }} >
                <ArrowBackIosIcon onClick={hanldePrev} />
                {mail.slice(number[0], number[1]).map((item) => {
                    return (
                        <div style={{ width: '250px', backgroundColor: 'white', margin: '5px', padding: '10px' }} id={item.id}>
                            <p>{item.email}</p>
                            <p>{item.subject}</p>
                            <BasicModal />
                            <div><p>{item.name.slice(0, 1)} </p></div>
                            <div><p>{item.name}</p></div>
                        </div >
                    )
                })}
                <ArrowForwardIosIcon onClick={hanldeNext} />
            </section>
        </>

    )
}