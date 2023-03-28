import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';


export function Bar ({page}){


    return (
        <div style={{display: 'flex', width: '100%', backgroundColor: 'gray'}}>
        <MenuIcon/>
        <p>{page}</p>
        <input type="text" />
        <FavoriteIcon/>
        <EmailIcon/>
        <NotificationsIcon/>
        <MessageIcon/>
        <LogoutIcon/>
        </div>
    )
}