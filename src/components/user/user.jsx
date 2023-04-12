import { TableUSer } from "./table-user"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchUser } from "../features/userSlice"



export function User() {


    const dispatch = useDispatch()
    const template = useSelector(store => store.user)



    useEffect(() => {
        dispatch(searchUser())
    }, [])


    const [users, setUsers] = useState(template)

    const handleSearch = (e) => {
        if (e !== '') {
            setUsers(template.filter(template => template.name.includes(e)))
        } else { setUsers(template) }
    }
    const [active, setActive] = useState()
    const [inactive, setInactive] = useState()
    const [all, setAll] = useState('')

    const colorCase = (n) => {
        n === 0 ? setAll('#E23428') : setAll('')
        n === 1 ? setActive('#E23428') : setActive('')
        n === 2 ? setInactive('#E23428') : setInactive('')
    }

    return (
        <>
            <div style={{ display: 'flex', margin: '20px ', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                    <p style={{ marginRight: '20px', borderBottom: '1px solid black', fontSize: '12px', color: 'gray', color: all, fontWeight: '700' }} onClick={() => { setUsers(template); colorCase(0) }} >All Employed </p>
                    <p style={{ marginRight: '20px', borderBottom: '1px solid black', fontSize: '12px', color: 'gray', color: active, fontWeight: '700' }} onClick={() => { setUsers(template.filter(template => template.status == true)); colorCase(1) }} >Active Employee</p>
                    <p style={{ borderBottom: '1px solid black', fontSize: '12px', color: 'gray', color: inactive, fontWeight: '700' }} onClick={() => { setUsers(template.filter(template => template.status == false)); colorCase(2) }} >Inactive Employee</p>
                </div>
                <div>
                    <span>Search: </span>
                    <input type="text" onChange={(e) => { handleSearch(e.target.value); colorCase(0) }} />
                </div>
                <button style={{ color: 'white', border: 'none', padding: '10px 20px', backgroundColor: '#135846', borderRadius: '20px' }}><Link to={'/new-user'} style={{ color: 'white', textDecoration: 'none' }}>+New User</Link></button>
            </div >
            <TableUSer template={users} />
        </>
    )
}