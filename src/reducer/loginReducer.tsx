
interface  InitState{
    auth: boolean
    name: string
    email: string
}

export const userInitialState: InitState = { auth: false, name: '', email: '' }


export const LoginReducer = (state: InitState, action: InitState) => {

    state = action
    return state
}