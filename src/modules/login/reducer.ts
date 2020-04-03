import { LoginState, LoginAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LOGIN, LOGOUT } from "./actions";

const initialState: LoginState = {
    id: '',
    name: '',
    authentication: ''
};

const loginReducer = createReducer<LoginState, LoginAction>(initialState, {
    [LOGIN]: (state, { payload: data }) =>
        ({
            id: data[0],
            name: data[1],
            authentication: data[2]
        }),
    [LOGOUT]: () =>
        ({
            id: '',
            name: '',
            authentication: ''
        })
})

export default loginReducer;