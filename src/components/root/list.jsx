import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { useState } from 'react';



export default function NestedList() {


    const linkStyle = { color: 'gray', textDecoration: 'none', fontWeight: 700 }
    const active = { borderLeft: '3px solid #E23428', color: '#E23428', fontWeight: 400 }

    const [d, setD] = useState(active)
    const [r, setR] = useState(linkStyle)
    const [u, setU] = useState(linkStyle)
    const [c, setC] = useState(linkStyle)
    const [b, setB] = useState(linkStyle)

    const handleStyle = (n) => {
        n === 0 ? setD(active) : setD(linkStyle)
        n === 1 ? setR(active) : setR(linkStyle)
        n === 2 ? setB(active) : setB(linkStyle)
        n === 3 ? setU(active) : setU(linkStyle)
        n === 4 ? setC(active) : setC(linkStyle)
    }

    const marRight = {
        marginRight: '20px',
    }

    return (
        <>
            <Link to={"/dashboard-hotel-miranda/dashboard"} style={linkStyle} onClick={() => handleStyle(0)}>
                <ListItemButton style={d} >
                    <DashboardIcon style={marRight} />
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </Link>
            <Link to={'/dashboard-hotel-miranda/room'} style={linkStyle} onClick={() => handleStyle(1)}>
                <ListItemButton style={r} >
                    <BedIcon style={marRight} />
                    <ListItemText primary="Rooms" />
                </ListItemButton>
            </Link>
            <Link to={'/dashboard-hotel-miranda/booking'} style={linkStyle} onClick={() => handleStyle(2)}>
                <ListItemButton style={b}>
                    <CalendarMonthIcon style={marRight} />
                    <ListItemText primary="Booking" />
                </ListItemButton>
            </Link>
            <Link to={'/dashboard-hotel-miranda/user'} style={linkStyle} onClick={() => handleStyle(3)}>
                <ListItemButton style={u}>
                    <PersonIcon style={marRight} />
                    <ListItemText primary="User" />
                </ListItemButton>
            </Link>
            <Link to={'/dashboard-hotel-miranda/contact'} style={linkStyle} onClick={() => handleStyle(4)}>
                <ListItemButton style={c}>
                    <ImportContactsIcon style={marRight} />
                    <ListItemText primary="Contact" />
                </ListItemButton>
            </Link>
        </>
    );
}