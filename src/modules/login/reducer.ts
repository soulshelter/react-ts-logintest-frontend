import { LoginState, LoginAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LOGIN, LOGOUT } from "./actions";

const initialState: LoginState = {
    id: '',
    name: '',
    authentication: ''
};

const loginReducer = createReducer<LoginState, LoginAction>(initialState, {
    [LOGIN]: () =>
        ({
            id: 'login',
            name: '로그인',
            authentication: 'value'
        }),
    [LOGOUT]: () =>
        ({
            id: '',
            name: '',
            authentication: ''
        })
})

export default loginReducer;