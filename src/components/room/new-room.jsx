import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export function NewRoom() {

    const [type, setType] = useState('')
    const [number, setNumber] = useState('')
    const [description, setDescription] = useState('')
    const [offer, setOffer] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const [cancellation, setCancellation] = useState('')
    const facilities = []

    const [room, setRoom] = useState([])

    const handleCreate = () => {
        setRoom([type, number, description, offer, price, discount, cancellation])
    }

    const secStyle = {
        padding: '50px',
        backgroundColor: 'white',
        boxShadow: '1px 1px 5px grey',
        width: '80%',
        margin: 'auto',
        marginTop: '50px'
    }

    const addFacilities = (option) => {

        
        if(facilities.includes(option)){
            console.log('dentro de if')
            facilities.filter(item => item !== option) 
        } else {
            console.log('dentro de else')
            facilities.push(option)
        }
    }


    return (
        <>
            <section style={secStyle}>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <label htmlFor="">
                                <p>Room Type</p>
                                <input type="text" name="" id="" onChange={e => setType(e.target.value)} />
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="">
                                <p>Room Number</p>
                                <input type="text" onChange={e => setNumber(e.target.value)} />
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="">
                                <p>Description</p>
                                <input type="text" onChange={e => setDescription(e.target.value)} />
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="">
                                <p>Offer</p>
                                <input type="checekd" name="" id="" onChange={e => setOffer(e.target.value)} />
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="">
                                <p>Price</p>
                                <input type="text" onChange={e => setPrice(e.target.value)} />
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="">
                                <p>Discount</p>
                                <input type="text" onChange={e => setDiscount(e.target.value)} />
                            </label>
                        </Grid>
                    </Grid>
                </Box>
                <p style={{ marginTop: '5px' }} >Cancellation Polity</p>
                <textarea  cols="30" rows="10" style={{ resize: 'none' }} onChange={e => setCancellation(e.target.value)}></textarea>
                <label >
                    <p style={{ marginTop: '10px' }}>Facilities: </p>
                    <article style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <p onClick={() => addFacilities('wifi')} >WIFI</p>
                        </div>
                        <div>
                            <p onClick={() => addFacilities('tv')} >Tv</p>
                        </div>
                        <div>
                            <p onClick={() => addFacilities('air')} >Air</p>
                        </div>
                        <div>
                            <p onClick={() => addFacilities('shower')} >Shower</p>
                        </div>
                        <div>
                            <p onClick={() => addFacilities('bed')} >Bed</p>
                        </div>
                            
                    </article>
                </label>
                <button onClick={() => handleCreate()} >Create</button>
            </section>
            {room}
        </>
    )
}



