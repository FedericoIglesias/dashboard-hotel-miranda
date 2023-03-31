import { useState } from "react"

export function EditCard({ edit }) {

    const [name, setName] = useState('Mitchael Iddon')
    const [mail, setMail] = useState('bgodley0@quantcast.com')

    if (edit === 1) {
        return (
            <>
            <input  onChange={(e) => {setName(e.target.value); console.log(name)}} style={{fontWeight: '700'}} />
            <input  onChange={(e) => setMail(e.target.value)} style={{color:'gray', fontSize:'13px', marginBottom:'10px'}}/>
            </>
        )
    }else{
        return (
            <>
            <p style={{fontWeight: '700'}}>{name}</p>
            <p style={{color:'gray', fontSize:'13px', marginBottom:'10px'}} >{mail}</p>
            </>
        )
    }
}