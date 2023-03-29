import { Bar } from "../nav-bar/bar"
import { Proof } from "../contact/proof"
import { Stats } from "./stats"





export function Dashboard() {
    const page = 'Dashboard'




    return (
        <>
            <Bar page={page} />
            <Stats/>
            <section>
                <p>calendario</p>
                <p>stats</p>
            </section>
            <Proof />
        </>
    )
}