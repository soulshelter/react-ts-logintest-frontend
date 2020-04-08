import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type LoginAction = ActionType<typeof actions>;

export type LoginState = {
    id: string;
    name: string;
    authentication: string;
    state: string;
}