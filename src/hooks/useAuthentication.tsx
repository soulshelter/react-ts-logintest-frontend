import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useAuthentication() {
    const authentication = useSelector((state: RootState) => state.login.authentication);
    return authentication !== "" ? true : false
}