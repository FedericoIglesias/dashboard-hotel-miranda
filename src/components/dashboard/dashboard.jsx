import { Bar } from "../nav-bar/bar"
import room from '../../json/room.json'
import check from '../../json/check.json'
import mail from '../../json/mail.json'
import { Proof } from "../contact/proof"



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
            <Proof />
        </>
    )
}