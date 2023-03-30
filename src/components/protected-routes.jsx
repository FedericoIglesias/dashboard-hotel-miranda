import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import template from '../json/template.json'

export const ProtectedRoutes = () => {
    let usuario = localStorage.getItem('user')
    let [name, setName] = useState('')
    let [password, setPassword] = useState('')


    let handleLogin = () => {
        let user = template.filter(user => user.name === name)
        console.log(user)
        console.log(user[0].password)

        if(user[0].password == password){
            localStorage.setItem('user','1')
            
        }
    }
    
    if (!usuario) {
        return(
            <div>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
                {name}
                {password}
            </div>)
    }
    
    return <Outlet/>;

};

