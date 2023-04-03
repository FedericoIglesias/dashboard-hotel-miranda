import { useState } from "react"

export function EditCard({ edit }) {

    const [name, setName] = useState('Mitchael Iddon')
    const [mail, setMail] = useState('bgodley0@quantcast.com')

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