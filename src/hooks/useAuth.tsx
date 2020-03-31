import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useAuth() {
    const auth = useSelector((state: RootState) => state.login.auth);
    return auth;
}