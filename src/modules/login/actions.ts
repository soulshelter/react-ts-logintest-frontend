import { createAction } from 'typesafe-actions';

// 액션 type
export const LOGIN = 'login/LOGIN';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'login/LOGIN_FAILURE';
export const LOGOUT = 'login/LOGOUT';

// 액션 생성 함수
export const login = createAction(LOGIN)();
export const loginSuccess = createAction(LOGIN_SUCCESS)<string[]>();
export const loginFailure = createAction(LOGIN_FAILURE)();
export const logout = createAction(LOGOUT)();