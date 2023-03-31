import { useNavigate } from "react-router"
import { useState } from "react"
import template from '../json/template.json'
import styled from "styled-components"
import backgroundLogin from '../assets/backgroungLogin.avif'

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
    background-color: ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    & div{
        width: 300px;
        background-color: violet;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: '30px';
        box-shadow: 1px 1px 5px gray;
            & input{
            width: 200px;
            margin-bottom: 10px
            }
            & button{
            width: 100px
            }
    }
        `;




    return (
        <>
            <Myh1 style={{}}>
                <div>
                    <input type="text" value='Xymenes Hallas' onChange={(e) => setName(e.target.value)} />
                    <input type='password' value='100' onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </Myh1>
        </>
    )
}