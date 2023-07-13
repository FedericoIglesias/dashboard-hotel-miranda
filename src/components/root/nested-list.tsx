import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import React,{ FC, useState } from 'react';
import { marRight, linkStyle, active } from './variablesRoot';
import { CSSProperties } from 'styled-components';


export const NestedList: FC = (): JSX.Element => {


    const [d, setD] = useState<CSSProperties>(linkStyle)
    const [r, setR] = useState<CSSProperties>(linkStyle)
    const [u, setU] = useState<CSSProperties>(linkStyle)
    const [c, setC] = useState<CSSProperties>(linkStyle)
    const [b, setB] = useState<CSSProperties>(linkStyle)

    const handleStyle = (n: number): void => {
        n === 0 ? setD(active) : setD(linkStyle)
        n === 1 ? setR(active) : setR(linkStyle)
        n === 2 ? setB(active) : setB(linkStyle)
        n === 3 ? setU(active) : setU(linkStyle)
        n === 4 ? setC(active) : setC(linkStyle)
    }


    return (
        <>
            <Link to={"/dashboard"} style={linkStyle} onClick={() => handleStyle(0)}>
                <ListItemButton style={d} >
                    <DashboardIcon style={marRight} />
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </Link>
            <Link to={'/room'} style={linkStyle} onClick={() => handleStyle(1)}>
                <ListItemButton style={r} >
                    <BedIcon style={marRight} />
                    <ListItemText primary="Rooms" />
                </ListItemButton>
            </Link>
            <Link to={'/booking'} style={linkStyle} onClick={() => handleStyle(2)}>
                <ListItemButton style={b}>
                    <CalendarMonthIcon style={marRight} />
                    <ListItemText primary="Booking" />
                </ListItemButton>
            </Link>
            <Link to={'/user'} style={linkStyle} onClick={() => handleStyle(3)}>
                <ListItemButton style={u}>
                    <PersonIcon style={marRight} />
                    <ListItemText primary="User" />
                </ListItemButton>
            </Link>
            <Link to={'/contact'} style={linkStyle} onClick={() => handleStyle(4)}>
                <ListItemButton style={c}>
                    <ImportContactsIcon style={marRight} />
                    <ListItemText primary="Contact" />
                </ListItemButton>
            </Link>
        </>
    );
}