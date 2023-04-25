
interface  InitState{
    auth: boolean
    name: string
    email: string
}

export const userInitialState: InitState = { auth: false, name: '', email: '' }


export const LoginReducer = (state, action) => {

    state = action
    return state
}