import { LoginState, LoginAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LOGIN, LOGOUT } from "./actions";

const initialState: LoginState = {
    id: '',
    name: '',
    auth: 'false'
};

const loginReducer = createReducer<LoginState, LoginAction>(initialState, {
    [LOGIN]: () =>
        ({
            id: 'login',
            name: '로그인',
            auth: "true"
        }),
    [LOGOUT]: () =>
        ({
            id: '',
            name: '',
            auth: 'false'
        })
})

export default loginReducer;
export * from './actions';
export * from './types';