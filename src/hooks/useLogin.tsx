import { useDispatch } from 'react-redux';
import { login, logout } from '../modules/login';
import { useCallback } from 'react';

export default function useLogin() {
    const dispatch = useDispatch();

    const onLogin = useCallback(
        (email: string, password: string) => {
            const loginData = [email, password];
            console.log(email + ' / ' + password);
            dispatch(login(loginData))
        }, [dispatch]
    );
    const onLogout = useCallback(
        () => dispatch(logout()), [dispatch]
    );

    return {
        onLogin,
        onLogout
    }
}