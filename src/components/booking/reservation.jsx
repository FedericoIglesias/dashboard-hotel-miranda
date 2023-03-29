import { useParams } from "react-router"
import booking from '../../json/booking.json'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';

export function Reservation() {

    let id = "#00000009"
    let book = booking.filter(booking => booking.id == id)
    console.log(book[0].nombre)

    const params = useParams()
    return (
        <section>
            <article>

            <div>
                <img src="" alt="profile" />
                <p>{book[0].nombre}</p>
                <p>ID {book[0].id}</p>
                <LocalPhoneIcon />
                <button><MessageIcon /> Send Message</button>
            </div>
            <div>
                <p>Room Info</p>
                <p>{book[0].tipoHabitacion}</p>
                <p>price</p>
                <p>$145 /night</p>
            </div >
            <p>{book[0].specialRequest}</p>
            <div>
                <p>Facilities</p>
            </div>
            </article>
            <article>
                <img src="" alt="room" />
                <p>{book[0].status}</p>
            </article>
        </section>
    )
}