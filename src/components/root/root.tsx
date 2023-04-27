import React, { FC } from "react";
import { Card } from "./card";
import { Outlet } from "react-router-dom";
import { Bar } from "../bar";
import { useState } from "react";
// import logo from '../../assets/logo.webp'
import Slide from '@mui/material/Slide';
import { ObjCheck, BoxNav, smallLetter, title } from "./variablesRoot";
import { NestedList } from "./nested-list";


export const Root: FC = (): JSX.Element => {

    const [checked, setChecked] = useState<ObjCheck>({check: true, marleft: '20%'});

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Slide direction="right" in={checked.check} mountOnEnter unmountOnExit>
                <BoxNav >
                    <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <img  alt="" style={{ width: '60px', marginRight: '10px' }} />
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
                </BoxNav>
            </Slide>
            <div style={{ backgroundColor: '#f8f8f8', width: '80%', paddingBottom: '50px', marginLeft: checked.marleft }}>
                <Bar setChecked={setChecked} />
                <Outlet />
            </div>
        </div>
    )
}

