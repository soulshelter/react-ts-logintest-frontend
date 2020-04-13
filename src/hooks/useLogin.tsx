import { useDispatch, useSelector } from 'react-redux';
import { login, logout, loginSuccess, loginFailure } from '../modules/login';
import { useCallback } from 'react';
import { getAuthentication } from '../api/reqres'
import { RootState } from '../modules';


export default function useLogin() {
    const dispatch = useDispatch();

    const onLogin = useCallback(
        async (email: string, password: string) => {
            dispatch(login());
            try {
                let res = await getAuthentication();
                let data = res.data;
                console.log(data);
                const loginData = [email, password, data.authentication];
                dispatch(loginSuccess(loginData));
            } catch (e) {
                dispatch(loginFailure());
            }

        }, [dispatch]);
    const loginState = useSelector((state: RootState) => state.login.state);

    const onLogout = useCallback(
        () => dispatch(logout()), [dispatch]
    );
    return {
        loginState,
        onLogin,
        onLogout
    }
}