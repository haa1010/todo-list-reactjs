import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

// Import all reducers here
import authReducer, { AuthState } from './auth/reducer';
// Import all sagas here
import authSagas from './auth/sagas';
import todoSagas from './todo/sagas';
import todoReducer, { TodoListState } from './todo/reducer';

export interface GlobalState {
    auth: AuthState;
    todo: TodoListState;
}

export const combinedReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
});

export const rootSaga = function* (): any {
    yield all([authSagas, todoSagas]);
};
