import MenuIcon from '@mui/icons-material/Menu';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { LoginContext } from '../context/loginContext';


export function Bar({ setChecked }) {

    const [state, setState] = useState(1)
    const {dispatchLogin} = useContext(LoginContext)

    const noti = {
        position: 'absolute',
        fontSize: '8px',
        backgroundColor: '#E23428',
        borderRadius: '5px',
        fontWeight: '700',
        top: '-3px',
        right: '-10px',
        padding: '1px 2px',
        color: 'white'
    }

    const handleLogout = () => {
        dispatchLogin({type: 'logout'})
    }

    const handleShow = () => {
        if (state === 1) {
            setChecked({check: false, marleft: ''})
            setState(0)
        } else {
            setChecked({check: true, marleft: '20%'})
            setState(1)
        }
    }

    const Assets = styled.div`
    display: flex;
    `;
    const secStyle = {
        display: 'flex',
        width: '100%',
        backgroundColor: 'white',
        marginBottom: '20px',
        justifyContent: 'space-between',
        padding: '5px 30px'
    }

    const stylePosition = {
        position: 'relative',
        margin: '0 40px',
    }

    return (
        <section style={secStyle}>
            <Box>
                <MenuIcon onClick={() => handleShow()} />
            </Box>
            <Assets >
                <div style={stylePosition}>
                    <EmailOutlinedIcon />
                    <p style={noti}>000</p>
                </div>
                <div style={stylePosition}>
                    <ChatOutlinedIcon />
                    <p style={noti}>000</p>
                </div>
                <LogoutIcon id='cypress-logout' onClick={() => handleLogout()} />
            </Assets>
        </section>
    )
}