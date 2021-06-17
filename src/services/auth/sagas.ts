import { put, takeEvery } from 'redux-saga/effects';

import { AUTH_ACTIONS, LoginAction } from './types';
import { loginSuccess, loginFailure } from './actions';

function* loginSaga(action: LoginAction) {
    try {
        yield put(
            loginSuccess({
                email: action.payload.email,
                token:
                    'rGdf3XgkLSZ_tvmLF3-XLMoezsDVzOpDWRtOJRj9a8zOBT1GmcgtKqSKR3J-PAxa1FKGqWpx2SIkK_B38OktHg6K7R-9q-Cpqj4pPKMt2ltjKLNRB1LIQdeOFm4XrTghsEX6un__qCXeErHGUfMqRlVa1avo06NF3RbEy-e6wXqxbArgHqctF2Upt5P4J5HYl-gSGGhhGp1tXBozTc7jC4Tv-ryMWgo7vxMZC7pYMpj5kfr7R95wrvIuHLjZBVwEPReYH2NqkKJk-f8w4Tyo8lWl283ePVA5Ws5R2VtUFZiTBoRE5grVv6_8s6G9PjGrBryAzrZFAX0eEqU7GnalxrpizvZsO4v2QcwgW6x82Knvkcxl3eZlV58PyJmWqXG5af60C6gU_rP9Cfa2vvSe6g-51oKJsxek8WWq5eJVSdG5_0UwTlaUcDMI4rxngRDvLCKi55GcU2rwPNPTJyF100tUtw65hZPfzq3Og8sHPEVVxUJbOkYbmeM0wYNgkrUQD3sY77mGgbRgzaN37RjdKlh6MipHrfIJQKX4ZJa0QoQ',
            }),
        );
    } catch (error) {
        yield put(loginFailure());
    }
}

function* watchAll() {
    yield takeEvery(AUTH_ACTIONS.LOGIN, loginSaga);
}

export default watchAll();
