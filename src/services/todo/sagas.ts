import { put, takeEvery, call } from 'redux-saga/effects';

import { TODO_ACTIONS, TodoInfo } from './types';
import { getTodoListSuccess, getTodoListFailure } from './actions';
import todoApis from './api';

function* getListSaga() {
    try {
        const result: TodoInfo[] = yield call(() => todoApis.getList());
        yield put(getTodoListSuccess(result));
    } catch (error) {
        yield put(getTodoListFailure());
    }
}

function* watchAll() {
    yield takeEvery(TODO_ACTIONS.LIST, getListSaga);
}

export default watchAll();
