import { route } from "../env-var";
import { InitState, SendLogin } from "../types";


export const fetchLogin = async (data: SendLogin): Promise<InitState> =>{
    try{
        const response = await fetch(route.login, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
        
        const user = await response.json();

        return  user;
    } catch(e){
        alert(e)
    }
}