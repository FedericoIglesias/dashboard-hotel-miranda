import React from "react";
import NestedList from "./list";
import { Card } from "./card";


export function Root() {
    return (
        <div style={{width: '30%', padding: '20px', backgroundColor: 'grey', boxSizing: 'border-box', height: '100vh'}}>
            <p>Manager 3000</p>
            <p>Hotel Miranda</p>
            <NestedList />
            <Card />
            <p>Manager 3000 Hotel Miranda</p>
            <p>Made whit love by Federico Dev</p>
        </div>
    )
}