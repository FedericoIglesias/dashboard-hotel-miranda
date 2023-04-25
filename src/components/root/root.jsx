import React from "react";
import NestedList from "./list";
import { Card } from "./card";
import { Outlet } from "react-router-dom";
import { Bar } from "../bar";
import { useState } from "react";
import logo from '../../assets/logo.webp'
import Slide from '@mui/material/Slide';


export function Root() {



    const [checked, setChecked] = useState({check: true, marleft: '20%'});

    const boxNav = {
        width: '20%',
        padding: '20px',
        backgroundColor: 'white',
        height: '100vh',
        position: 'fixed',
        left: 0,
        boxSizing: 'border-box',
    }

    const smallLetter = {
        fontSize: '12px',
        color: '#799283',
    }

    const title = {
        color: '#212121',
        fontWeight: 700,
        fontSize: '23px',
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Slide direction="right" in={checked.check} mountOnEnter unmountOnExit>
                <div style={boxNav}>
                    <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <img src={logo} alt="" style={{ width: '60px', marginRight: '10px' }} />
                        <div>
                            <p style={title} >travl</p>
                            <p style={smallLetter} >Admin Dashboard</p>
                        </div>
                    </div>
                    <NestedList />
                    <Card />
                    <p style={{ fontWeight: '700' }} >Travl Admin Dashboard</p>
                    <p style={smallLetter} >© 2020 All Rights Reserved</p>
                    <p style={smallLetter} >Made whit ♥ by Federico Dev</p>
                </div>
            </Slide>
            <div style={{ backgroundColor: '#f8f8f8', width: '80%', paddingBottom: '50px', marginLeft: checked.marleft }}>
                <Bar setChecked={setChecked} />
                <Outlet />
            </div>
        </div>
    )
}

