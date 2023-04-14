import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../context/loginContext"

export function EditCard({ edit }) {

    const {login} = useContext(LoginContext)

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')

    useEffect(() => {
        setMail(login.mail)
        setName(login.name)
    },[login])

    const styleMail = {
        color: 'gray',
        fontSize: '12px',
        marginBottom: '10px'
    }

    if (edit === 1) {
        return (
            <>
                <input onChange={(e) => setName(e.target.value)} style={{ fontWeight: '700' }} />
                <input onChange={(e) => setMail(e.target.value)} style={styleMail} />
            </>
        )
    } else {
        return (
            <>
                <p style={{ fontWeight: '700' }}>{name}</p>
                <p style={styleMail} >{mail}</p>
            </>
        )
    }
}