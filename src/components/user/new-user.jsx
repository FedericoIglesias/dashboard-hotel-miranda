import { Bar } from "../nav-bar/bar"

export function NewUser() {

    const page = 'Create User'
    
    return (
        <section>
            <Bar page={page}/>
            <label htmlFor="">
                <p>Full Name</p>
                <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
                <p>Job</p>
                <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
                <p>Email</p>
                <input type="text" />
            </label>
            <label htmlFor="">
                <p>Phone</p>
                <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
                <p>Start Date</p>
                <input type="calendar" name="" id="" />
            </label>
            <label htmlFor="">
                <p>Description</p>
                <textarea name="" id="" cols="30" rows="10" style={{ resize: 'none' }}></textarea>
            </label>
            <label htmlFor="">
                <p>Status</p>
                <select name="" id="">
                    <option value="">Active</option>
                    <option value="">Inactive</option>
                </select>
            </label>
            <label htmlFor="">
                <p>Password</p>
                <input type="password" />
            </label>
            <button>Create User</button>
        </section>
    )
}