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
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    & div{
        display: flex;
        box-shadow: 1px 1px 5px gray;
        background-color: white;
        & hr{
            background-color: #000000;
            height: 300px;
            margin: 30px 0;
            width: 2px;
        }
    }
        `;

    const InputDiv = styled.section`
        padding: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: '30px';
        background-color: white;
        
            & input{
            width: 200px;
            margin-bottom: 10px;
            padding: 3px 5px;
            border: 1px solid black;
            
            }
            & button{
            width: 100px;
            background-color: #E23428;
            border:none;
            color: white;
            padding: 10px;
            border-radius: 5px;
            :hover{
                background-color: green;
            }
            }
        
    `;

    const Travl = styled.section`

    text-align: center;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & h2{
        width: 70%;
        margin: auto;
        font-size: 40px;
    }
    & p{
        position: relative;
        left: -150px;
    }
    `;



    return (
        <>
            <Myh1 className="login" style={{}}>
                <div>
                    <InputDiv>
                        <input type="text" value='Xymenes Hallas' onChange={(e) => setName(e.target.value)} />
                        <p> {log.name == null ? 'Name inalid' : ''}</p>
                        <input type='password' value='100' onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleLogin}>Login</button>
                    </InputDiv>
                    <hr />
                    <Travl>
                        <h2>Travl Management System</h2>
                        <p>If you want test, try press Login button</p>
                    </Travl>
                </div>

            </Myh1>
        </>
    )
}