import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Import all reducers here
import authReducer, { AuthState } from './auth/reducer';
// Import all sagas here
import authSagas from './auth/sagas';

export interface GlobalState {
    auth: AuthState;
}

export const combinedReducer = combineReducers({
    auth: authReducer,
});

export const rootSaga = function* (): any {
    yield all([authSagas]);
};
