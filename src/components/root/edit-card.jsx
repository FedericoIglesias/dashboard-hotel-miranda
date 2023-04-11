import { useContext, useEffect, useState } from "react"
import { LogContext } from "../logContext"

export function EditCard({ edit }) {

    const {log} = useContext(LogContext)

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')

    useEffect(() => {
        setMail(log.mail)
        setName(log.name)
    },[log])

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