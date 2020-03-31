import { useDispatch } from 'react-redux';
import { login, logout } from '../modules/login';
import { useCallback } from 'react';

export default function useLogin() {
    const dispatch = useDispatch();

    const onLogin = useCallback(
        () => dispatch(login()), [dispatch]
    );
    const onLogout = useCallback(
        () => dispatch(logout()), [dispatch]
    );

    return {
        onLogin,
        onLogout
    }
}