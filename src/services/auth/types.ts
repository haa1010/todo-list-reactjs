export const AUTH_ACTIONS = {
    LOGIN: 'LOGIN',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

interface UserInfo {
    email: string;
    token: string;
}

interface LoginParams {
    email: string;
    password: string;
}

interface LoginResponse {
    email: string;
    token: string;
}

interface LoginAction {
    type: typeof AUTH_ACTIONS.LOGIN;
    payload: LoginParams;
}

interface LoginSuccessAction {
    type: typeof AUTH_ACTIONS.LOGIN_SUCCESS;
    payload: LoginResponse;
}

interface LoginFailureAction {
    type: typeof AUTH_ACTIONS.LOGIN_FAILURE;
}

export type { LoginAction, LoginSuccessAction, LoginFailureAction, LoginResponse, LoginParams, UserInfo };
