import { useContext, useState } from "react"
import styled from "styled-components"
import { LogContext } from "../components/logContext"


export function Login() {

    const [name, setName] = useState('Xymenes Hallas')
    const [password, setPassword] = useState('100')

    const { log, dispatchLog } = useContext(LogContext)

    const handleLogin = () => {
        dispatchLog({ type: 'login', name: name, password: password })
    }

    const Myh1 = styled.section`
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
                    <p> {log.name == null ? 'Name inalid' : ''}</p>
                    <input type='password' value='100' onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </Myh1>
        </>
    )
}