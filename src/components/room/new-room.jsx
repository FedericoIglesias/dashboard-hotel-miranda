import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export function NewRoom() {

    let [type, setType] = React.useState('')
    let [number, setNumber] = React.useState('')
    let [description, setDescription] = React.useState('')
    let [offer, setOffer] = React.useState('')
    let [price, setPrice] = React.useState('')
    let [discount, setDiscount] = React.useState('')
    let [cancellation, setCancellation] = React.useState('')

    let [room, setRoom] = React.useState([])

    let handleCreate = () => {
        setRoom([type,number,description,offer,price,discount,cancellation])
    }

    return (
        <>
            <section style={{ padding: '50px', backgroundColor: 'white', boxShadow: '1px 1px 5px grey', width: '80%', margin:'auto', marginTop: '50px' }}>
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
                                <input type="text" onChange={e => setNumber(e.target.value)}/>
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="">
                                <p>Description</p>
                                <input type="text" onChange={e => setDescription(e.target.value)}/>
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="">
                                <p>Offer</p>
                                <input type="checekd" name="" id="" onChange={e => setOffer(e.target.value)}/>
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="">
                                <p>Price</p>
                                <input type="text" onChange={e => setPrice(e.target.value)}/>
                            </label>
                        </Grid>
                        <Grid item xs={6}>
                            <label htmlFor="">
                                <p>Discount</p>
                                <input type="text" onChange={e => setDiscount(e.target.value)}/>
                            </label>
                        </Grid>
                    </Grid>
                </Box>
                <p style={{marginTop: '5px'}} >Cancellation Polity</p>
                <textarea name="" id="" cols="30" rows="10" style={{ resize: 'none' }} onChange={e => setCancellation(e.target.value)}></textarea>
                <label >
                    <p style={{marginTop: '10px'}}>Facilities</p>
                    <article style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                        <p>WIFI</p>
                        <input type="radio" name="" id="wifi" />
                    </div>
                    <div>
                        <p>Tv</p>
                        <input type="radio" name="" id="tv" />
                    </div>
                    <div>
                        <p>Air</p>
                        <input type="radio" name="" id="air" />
                    </div>
                    <div>
                        <p>Bañera</p>
                        <input type="radio" name="" id="bañera" />
                    </div>
                    <div>
                        <p>Bed</p>
                        <input type="radio" name="" id="bed" />
                    </div>
                    </article>
                </label>
                <button onClick={handleCreate} >Create</button>
            </section>
            {room}
        </>
    )
}



