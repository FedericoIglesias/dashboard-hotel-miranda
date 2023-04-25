import { FC, useContext, useEffect, useState } from "react"
import { LoginContext } from "../../context/loginContext"
import React from "react"

interface Edit {
    edit: number
}

export const EditCard: FC<Edit> = ({ edit }): JSX.Element =>  {

    const {login} = useContext<any>(LoginContext)

    const [name, setName] = useState<string>('')
    const [mail, setMail] = useState<string>('')

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