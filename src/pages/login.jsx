import { useNavigate } from "react-router"
import { useState } from "react"
import template from '../json/template.json'
import styled from "styled-components"
import backgroundLogin from '../assets/backgroungLogin.avif'
import loginBackground from './login.css'

export function Login() {

    const [name, setName] = useState('Xymenes Hallas')
    const [password, setPassword] = useState('100')
    const navigate = useNavigate()

    const handleLogin = () => {
        let user = template.filter(user => user.name === name)
        console.log(user)
        console.log(user[0].password)
        if (user[0].password == password) {
            localStorage.setItem('user', '1')
            navigate('/dashboard-hotel-miranda/dashboard')
        }
    }

    const Myh1 = styled.section`
    loginBackground;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    & div{
        width: 300px;
        padding: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: '30px';

        & h1{
            text-align: center;
            font-size: 50px;
            margin-bottom: 20px;
            color: #f5e1ce
        }
            & input{
            width: 200px;
            margin-bottom: 10px;
            padding: 2px;
            border: none;
            
            }
            & button{
            width: 100px;
            background-color: #e8c39e;
            border:none;
            padding: 10px;
            border-radius: 5px;
            }
    }
        `;




    return (
        <>
            <Myh1 className="login" style={{}}>
                <div>
                    <h1>Welcome</h1>
                    <input type="text" value='Xymenes Hallas' onChange={(e) => setName(e.target.value)} />
                    <input type='password' value='100' onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </Myh1>
        </>
    )
}