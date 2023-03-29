import mail from '../../json/mail.json'
import BasicModal from './modal'

export function Proof (){
    return(

        <section style={{display: 'flex', flexWrap: 'wrap'}}>
        {mail.slice(0,10).map((item) => {
            return(
                <div style={{width: '300px', backgroundColor: 'white', margin: '10px', padding:'10px'}}>
                    <p>{item.email}</p>
                    <p>{item.subject}</p>
                    <BasicModal />
                    <div><p>{item.name.slice(0,1)} </p></div>
                    <div><p>{item.name}</p></div>
                </div>
            )
        })}
    </section>
    )
}