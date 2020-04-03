import { useDispatch } from 'react-redux';
import { login, logout } from '../modules/login';
import { useCallback } from 'react';
import { AuthResponse, getAuthentication } from '../api/reqres';
import { AxiosResponse } from 'axios';


export default function useLogin() {
    const dispatch = useDispatch();

    const onLogin = useCallback(
        (email: string, password: string) => {
            getAuthentication()
                .then((response: AxiosResponse<AuthResponse>) => {
                    console.log(response);
                    const loginData = [email, password, response.data.authentication];
                    dispatch(login(loginData))
                })
                .catch((e: Error) => { throw e; })
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