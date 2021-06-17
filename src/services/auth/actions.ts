import { AUTH_ACTIONS, LoginAction, LoginFailureAction, LoginParams, LoginResponse, LoginSuccessAction } from './types';

export const login = (params: LoginParams): LoginAction => {
    return {
        type: AUTH_ACTIONS.LOGIN,
        payload: params,
    };
};

export const loginSuccess = (payload: LoginResponse): LoginSuccessAction => {
    return {
        type: AUTH_ACTIONS.LOGIN_SUCCESS,
        payload,
    };
};

export const loginFailure = (): LoginFailureAction => {
    return {
        type: AUTH_ACTIONS.LOGIN_FAILURE,
    };
};
