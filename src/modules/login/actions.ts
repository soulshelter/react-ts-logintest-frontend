import { createAction } from 'typesafe-actions';

// 액션 type
export const LOGIN = 'login/LOGIN';
export const LOGOUT = 'login/LOGOUT';

// 액션 생성 함수
export const login = createAction(LOGIN)<string[]>();
export const logout = createAction(LOGOUT)();