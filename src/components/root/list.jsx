import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';



export default function NestedList() {
    const [open, setOpen] = React.useState(true);

    const linkStyle = { color: 'black', textDecoration: 'none' }

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <Link to={"/"} style={linkStyle}>
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </Link>
            <Link to={'/room'} style={linkStyle}>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <BedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Room" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </Link>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to={'/new-room'}>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="New Room" />
                        </ListItemButton>
                    </Link>
                </List>
            </Collapse>
            <Link to={'/booking'} style={linkStyle} >
                <ListItemButton>
                    <ListItemIcon>
                        <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary="Booking" />
                </ListItemButton>
            </Link>
            <Link to={'/user'} style={linkStyle}>
                <ListItemButton>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="User" />
                </ListItemButton>
            </Link>
            <Link to={'/contact'} style={linkStyle}>
                <ListItemButton>
                    <ListItemIcon>
                        <ImportContactsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItemButton>
            </Link>
        </>
    );
}