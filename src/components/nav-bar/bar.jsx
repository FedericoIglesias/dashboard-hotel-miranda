import MenuIcon from '@mui/icons-material/Menu';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import styled from 'styled-components';


export function Bar({ setAside, setMarleft }) {

    const navigate = useNavigate()
    const [state, setState] = useState(1)


    let noti = {
        position: 'absolute',
        fontSize: '10px',
        backgroundColor: '#E23428',
        borderRadius: '5px',
        fontWeight: '700',
        top: '0',
        right: '-10px',
        padding: '1px 2px',
        color: 'white'
    }
    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    const handleShow = () => {
        if (state == 1) {
            setAside('none')
            setMarleft('')
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


    return (
        <section style={{ display: 'flex', width: '100%', backgroundColor: 'white', marginBottom: '20px', justifyContent: 'space-between', padding: '0 30px' }}>
            <MenuIcon onClick={() => handleShow()} />

            <Assets >
                <div style={{ position: 'relative', margin: '0 40px' }}>
                    <EmailOutlinedIcon />
                    <p style={noti}>000</p>
                </div>
                <div style={{ position: 'relative', margin: '0 40px' }}>
                    <ChatOutlinedIcon />
                    <p style={noti}>000</p>
                </div>
                <LogoutIcon onClick={() => handleLogout()} />
            </Assets>
        </section>
    )
}