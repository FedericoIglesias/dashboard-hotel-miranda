import { Bar } from "../nav-bar/bar"

export function NewRoom() {
    return (
        <section>
            <Bar/>
            <label htmlFor="">
                <p>Room Type</p>
                <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
                <p>Room Number</p>
                <input type="text" />
            </label>
            <label htmlFor="">
                <p>Description</p>
                <input type="text" />
            </label>
            <label htmlFor="">
                <p>Offer</p>
                <input type="checekd" name="" id="" />
            </label>
            <label htmlFor="">
                <p>Price</p>
                <input type="text" />
            </label>
            <label htmlFor="">
                <p>Discount</p>
                <input type="text" />
            </label>
            <p>Cancellation Politic</p>
            <textarea name="" id="" cols="30" rows="10" style={{resize: 'none'}} ></textarea>
            <label>
                <input type="radio" name="" id="wifi" /><p>WIFI</p>
                <input type="radio" name="" id="tv" /><p>Tv</p>
                <input type="radio" name="" id="air" /><p>Air</p>
                <input type="radio" name="" id="bañera" /><p>Bañera</p>
                <input type="radio" name="" id="bed" /><p>Bed</p>
            </label>
            <button>Create</button>
        </section>
    )
}