import { TableUSer } from "./table-user"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchUser } from "../../features/userSlice"



export function User() {


    const dispatch = useDispatch()
    const template = useSelector(store => store.user)
    const [users, setUsers] = useState(template)

    console.log(template);

    useEffect(() => {
        dispatch(searchUser())
    }, [])

    useEffect(() => {
        setUsers(template)
    }, [template])


    const handleSearch = (e) => {
        if (e !== '') {
            setUsers(template.filter(template => template.name.includes(e)))
        } else { setUsers(template) }
    }
    
    const redStyle = {
        marginRight: '20px',
        borderBottom: '1px solid black',
        fontSize: '12px',
        color: '#e23428',
        fontWeight: '700'
    }
    
    const grayStyle = {
        marginRight: '20px',
        borderBottom: '1px solid black',
        fontSize: '12px',
        color: 'gray',
        fontWeight: '700'
    }
    
    const [active, setActive] = useState(grayStyle)
    const [inactive, setInactive] = useState(grayStyle)
    const [all, setAll] = useState(redStyle)



    const colorCase = (n) => {
        n === 0 ? setAll(redStyle) : setAll(grayStyle)
        n === 1 ? setActive(redStyle) : setActive(grayStyle)
        n === 2 ? setInactive(redStyle) : setInactive(grayStyle)
    }

    const btnStyle = {
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        backgroundColor: '#135846',
        borderRadius: '20px'
    }

    return (
        <>
            <div style={{ display: 'flex', margin: '20px ', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                    <p style={all} onClick={() => { setUsers(template); colorCase(0) }} >All Employed </p>
                    <p style={active} onClick={() => { setUsers(template.filter(template => template.status === true)); colorCase(1) }} >Active Employee</p>
                    <p style={inactive} onClick={() => { setUsers(template.filter(template => template.status == false)); colorCase(2) }} >Inactive Employee</p>
                </div>
                <div>
                    <span>Search: </span>
                    <input type="text" onChange={(e) => { handleSearch(e.target.value); colorCase(0) }} />
                </div>
                <button style={btnStyle}>
                    <Link to={'/new-user'} style={{ color: 'white', textDecoration: 'none' }}>+New User</Link>
                </button>
            </div >
            <TableUSer template={users} />
        </>
    )
}