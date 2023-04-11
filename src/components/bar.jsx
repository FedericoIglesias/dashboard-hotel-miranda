import MenuIcon from '@mui/icons-material/Menu';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { LogContext } from './logContext';


export function Bar({ setAside, setMarleft }) {

    const [state, setState] = useState(1)
    const {dispatchLog} = useContext(LogContext)

    let noti = {
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
        dispatchLog({type: 'logout'})
    }

    const handleShow = () => {
        if (state === 1) {
            setAside('none')
            setMarleft('0')
            setState(0)
        } else {
            setAside('')
            setMarleft('20%')
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
                <LogoutIcon onClick={() => handleLogout()} />
            </Assets>
        </section>
    )
}