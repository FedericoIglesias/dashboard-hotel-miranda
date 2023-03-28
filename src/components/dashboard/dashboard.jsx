import { Bar } from "../nav-bar/bar"
import room from '../../json/room.json'
import check from '../../json/check.json'
import mail from '../../json/mail.json'
import BasicModal from "./modal"



export function Dashboard() {
    const page = 'Dashboard'

    const reservation = room.filter(room => room.booking)
    const checkIn = check.filter(check => check.checkIn)
    const checkOut = check.filter(check => check.checkOut)
    const mails = mail.slice(0, 10)
    

    return (
        <>
            <Bar page={page} />

            <section>
                <div><p>Reservation {reservation.length} </p></div>
                <div><p>Check in {checkIn.length}</p></div>
                <div><p>Check out {checkOut.length}</p></div>
                <div><p>Ocupado {(reservation.length / 1000) * 100}%</p></div>
            </section>
            <section>
            <p>calendario</p>
            <p>stats</p>
            </section>
            <section style={{display: 'flex', flexWrap: 'wrap'}}>
                {mails.map((item) => {
                    return(
                        <div style={{width: '300px', backgroundColor: 'white', margin: '10px', padding:'10px'}}>
                            <p>{item.mail}</p>
                            <p>{item.subject}</p>
                            <BasicModal />
                            <div><p>{item.name.slice(0,1)} </p></div>
                            <div><p>{item.name}</p></div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}