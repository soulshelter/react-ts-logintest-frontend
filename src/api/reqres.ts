import axios, { AxiosPromise } from 'axios';


export interface AuthResponse {
    authentication: string;
}

export interface Auth {
    authentication: string;
}
const reqresApi = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 5000
})

export function getAuthentication(): AxiosPromise<AuthResponse> {
    return reqresApi.get(`auth`);
}