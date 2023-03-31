import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import room from '../../json/room.json'
import check from '../../json/check.json'
import styled from 'styled-components';


export function Stats () {


    const reservation = room.filter(room => room.booking)
    const checkIn = check.filter(check => check.checkIn)
    const checkOut = check.filter(check => check.checkOut)


    const Card = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    padding: 20px 80px 20px 20px;
    box-shadow: 1px 1px 5px gray;
    :hover{
        box-shadow: 1px 1px 5px red;
        transform: Scale(1.08)
    }
    `;



    return(
        <section style={{display: 'flex', marginTop: '30px', justifyContent: 'space-around'}}>
                
                <Card>
                    <CalendarMonthIcon style={{backgroundColor: '#FFEDEC', padding: '2px', marginRight: '22px', color: '#E23428'}} />
                    <div>
                        <p style={{fontWeight: '700'}}>{reservation.length}</p>
                        <p style={{color: 'gray', fontSize: '10px'}}>Reservation</p>
                    </div>
                </Card>
            
                <Card>
                    <BedIcon style={{backgroundColor: '#FFEDEC', padding: '2px', marginRight: '22px', color: '#E23428'}}/>
                    <div>
                        <p style={{fontWeight: '700'}}>{(reservation.length / 1000) * 100}%</p>
                        <p style={{color: 'gray', fontSize: '10px'}}>Busy</p>
                    </div>
                </Card>
                <Card>
                    <LoginIcon style={{backgroundColor: '#FFEDEC', padding: '2px', marginRight: '22px', color: '#E23428'}}/>
                    <div>
                        <p style={{fontWeight: '700'}}>{checkIn.length}</p>
                        <p style={{color: 'gray', fontSize: '10px'}}>Check In</p>
                    </div>
                </Card>
                <Card>
                    <LogoutIcon style={{backgroundColor: '#FFEDEC', padding: '2px', marginRight: '22px', color: '#E23428'}}/>
                    <div>
                        <p style={{fontWeight: '700'}}>{checkOut.length}</p>
                        <p style={{color: 'gray', fontSize: '10px'}}>Check Out</p>
                    </div>
                </Card>
            </section>
    )
    }