import React from "react";
import NestedList from "./list";
import { Card } from "./card";
import { Outlet} from "react-router-dom";
import { Bar } from "../nav-bar/bar";
import { useState } from "react";

export function Root() {

    const [aside, setAside] = useState('')
    const [marleft, setMarleft] = useState('20%')


    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div style={{display: aside, width: '20%', padding: '20px', backgroundColor: 'white', boxSizing: 'border-box',height: '100vh', position: 'fixed', left: 0}}>
                <p>Manager</p>
                <p>Hotel Miranda</p>
                <NestedList />
                <Card />
                <p>Manager Hotel Miranda</p>
                <p>Made whit love by Federico Dev</p>
            </div>
            <div style={{ backgroundColor: '#f8f8f8', width: '80%', paddingBottom: '50px', marginLeft: marleft}}>
                <Bar setAside={setAside} setMarleft={setMarleft}/>
                <Outlet />
            </div>
        </div>
    )
}