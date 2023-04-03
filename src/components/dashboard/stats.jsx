import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import room from '../../json/room.json'
import check from '../../json/check.json'
import styled from 'styled-components';


export function Stats() {


    const reservation = room.filter(room => room.booking)
    const checkIn = check.filter(check => check.checkIn)
    const checkOut = check.filter(check => check.checkOut)


    const Card = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    padding: 20px 20px 20px 20px;
    width: 23%;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #eee;
    :hover{
        box-shadow: 1px 1px 5px red;
        transform: Scale(1.08)
    }
    `;

    const Number = styled.p`
    font-weight: 700;
    font-size: 30px;
    `;

    const Category = styled.p`
    color: gray;
    font-size: 14px;
    `;

    const styleIcon = {
        backgroundColor: '#FFEDEC',
        padding: '2px',
        marginRight: '22px',
        color: '#E23428',
        width: '65px',
        height: '65px',
    }


    return (
        <section style={{ display: 'flex', marginTop: '30px', justifyContent: 'space-around' }}>

            <Card>
                <CalendarMonthIcon style={styleIcon} />
                <div>
                    <Number>{reservation.length}</Number>
                    <Category >Reservation</Category>
                </div>
            </Card>

            <Card>
                <BedIcon style={styleIcon} />
                <div>
                    <Number >{(reservation.length / 1000) * 100}%</Number>
                    <Category >Busy</Category>
                </div>
            </Card>
            <Card>
                <LoginIcon style={styleIcon} />
                <div>
                    <Number >{checkIn.length}</Number>
                    <Category >Check In</Category>
                </div>
            </Card>
            <Card>
                <LogoutIcon style={styleIcon} />
                <div>
                    <Number >{checkOut.length}</Number>
                    <Category >Check Out</Category>
                </div>
            </Card>
        </section>
    )
}