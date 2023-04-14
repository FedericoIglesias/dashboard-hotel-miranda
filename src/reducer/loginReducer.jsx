import template from '../json/template.json'



export const userInitialState = { auth: false, name: '' }


export function LoginReducer(state, action) {

    state = action
    console.log(state)
    return state
}