import { put, takeEvery, call, all } from 'redux-saga/effects';

import { notify } from '../../common/utils/notify';

import {
    TODO_ACTIONS,
    ADD_TODO_ACTIONS,
    EDIT_TODO_ACTIONS,
    DELETE_TODO_ACTIONS,
    SEARCH_ACTIONS,
    TodoInfo,
    AddTodoAction,
    EditTodoAction,
    DeleteTodoAction,
    SearchAction,
    CHANGE_PAGE_ACTIONS,
    ChangePageAction,
} from './types';
import {
    getTodoListSuccess,
    getTodoListFailure,
    AddTodoSuccess,
    AddTodoFailure,
    deleteTodoFailure,
    deleteTodoSuccess,
    editTodoFailure,
    editTodoSuccess,
    searchSuccess,
    searchFailure,
    changePageSuccess,
} from './actions';
import todoApis from './api';

function* getListSaga() {
    try {
        const result: TodoInfo[] = yield call(() => todoApis.getList());
        yield put(getTodoListSuccess(result));
    } catch (error) {
        yield put(getTodoListFailure());
    }
}

function* AddTodoSaga(action: AddTodoAction) {
    try {
        const result: TodoInfo = yield call(() => todoApis.addTodo(action.payload));
        console.log(result);
        yield put(AddTodoSuccess(result));
        yield notify.success('Add todo item successful', 'Success');
    } catch (error) {
        yield put(AddTodoFailure());
    }
}

function* EditTodoSaga(action: EditTodoAction) {
    try {
        const result: TodoInfo = yield call(() => todoApis.editTodo(action.payload));
        // console.log(result);
        yield put(editTodoSuccess(result));
        yield notify.success('Edit todo item successful', 'Success');
    } catch (error) {
        yield put(editTodoFailure());
    }
}

function* DeleteTodoSaga(action: DeleteTodoAction) {
    try {
        const result: object = yield call(() => todoApis.deleteTodo(action.payload));
        // console.log(result);
        yield put(deleteTodoSuccess(action.payload));
    } catch (error) {
        yield put(deleteTodoFailure());
    }
}

function* SearchSaga(action: SearchAction) {
    try {
        const result: TodoInfo[] = yield call(() => todoApis.getList());
        yield put(getTodoListSuccess(result));
        yield put(searchSuccess(action.payload));
    } catch (error) {
        yield put(searchFailure());
    }
}

function* ChangePageSaga(action: ChangePageAction) {
    try {
        // const result: TodoInfo[] = yield call(() => todoApis.getList());
        // yield put(getTodoListSuccess(result));
        yield put(changePageSuccess(action.payload));
    } catch (error) {
        yield put(searchFailure());
    }
}

function* watchAll() {
    yield all([
        takeEvery(TODO_ACTIONS.LIST, getListSaga),
        takeEvery(ADD_TODO_ACTIONS.ADD, AddTodoSaga),
        takeEvery(EDIT_TODO_ACTIONS.EDIT, EditTodoSaga),
        takeEvery(DELETE_TODO_ACTIONS.DELETE, DeleteTodoSaga),
        takeEvery(SEARCH_ACTIONS.SEARCH, SearchSaga),
        takeEvery(CHANGE_PAGE_ACTIONS.CHANGE, ChangePageSaga),
    ]);
}

export default watchAll();
