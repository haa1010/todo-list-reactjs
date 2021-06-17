import { Reducer } from 'redux';
import { Action } from 'redux-actions';

import { produceReducer } from '../../common/utils/immer';

import { AUTH_ACTIONS, LoginResponse, UserInfo } from './types';

export interface AuthState {
    jwtToken: string;
    user: LoginResponse;
}

const initialState: AuthState = {
    jwtToken: '',
    user: { email: '', token: '' },
};

const actionHandlers = {
    [AUTH_ACTIONS.LOGIN_SUCCESS]: (draftStore: AuthState, action: Action<UserInfo>) => {
        draftStore.user = action.payload;
    },
};

export default produceReducer(actionHandlers, initialState) as Reducer<AuthState>;
