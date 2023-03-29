import React from "react";
import NestedList from "./list";
import { Card } from "./card";
import { Outlet } from "react-router-dom";


export function Root() {
    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div style={{ width: '25%', padding: '20px', backgroundColor: 'white', boxSizing: 'border-box',height: '100vh'}}>
                <p>Manager 3000</p>
                <p>Hotel Miranda</p>
                <NestedList />
                <Card />
                <p>Manager 3000 Hotel Miranda</p>
                <p>Made whit love by Federico Dev</p>
            </div>
            <div style={{ backgroundColor: '#eee', width: '80%'}}>
                <Outlet />
            </div>
        </div>
    )
}