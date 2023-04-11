import template from '../../json/template.json'



export const userInitialState = { auth: false, name: '', password: '' }


export function LogReducer(state, action) {
    switch (action.type) {
        case 'login':
            const user = template.filter(user => user.name === action.name)
            if (user.length === 0) {
                state = { auth: false, user: null }
                return state
            }
            else {
                if (user[0].password == action.password) {
                    state = { auth: true, name: user[0].name, mail: user[0].email }
                    return state
                } else {
                    return state = { auth: false, password: null }
                };
            }

        case 'logout':
            state = { auth: false, name: '', password: '' }
            return state

        default: break;
    }
}