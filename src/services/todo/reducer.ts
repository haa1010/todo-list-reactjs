import { Reducer } from 'redux';
import { Action } from 'redux-actions';

import { produceReducer } from '../../common/utils/immer';

import {
    TODO_ACTIONS,
    ADD_TODO_ACTIONS,
    EDIT_TODO_ACTIONS,
    DELETE_TODO_ACTIONS,
    TodoInfo,
    SEARCH_ACTIONS,
    CHANGE_PAGE_ACTIONS,
} from './types';

export interface TodoListState {
    todoList: TodoInfo[];
    paginationConfig: { currentPage: number; todosPerPage: number; indexOfLastPost: number; indexOfFirstPost: number };
}

const initialState: TodoListState = {
    todoList: [{ userId: 0, id: 0, title: '', completed: false }],
    paginationConfig: { currentPage: 1, todosPerPage: 10, indexOfLastPost: 10, indexOfFirstPost: 0 },
};

const actionHandlers = {
    [TODO_ACTIONS.SUCCESS]: (draftStore: TodoListState, action: Action<TodoInfo[]>) => {
        draftStore.todoList = action.payload;
    },
    [ADD_TODO_ACTIONS.SUCCESS]: (draftStore: TodoListState, action: Action<TodoInfo>) => {
        draftStore.todoList.push(action.payload);
    },
    [EDIT_TODO_ACTIONS.SUCCESS]: (draftStore: TodoListState, action: Action<TodoInfo>) => {
        draftStore.todoList.forEach((e, index) => {
            if (e.id === action.payload.id) {
                draftStore.todoList[index] = action.payload;
            }
        });
    },
    [DELETE_TODO_ACTIONS.SUCCESS]: (draftStore: TodoListState, action: Action<number>) => {
        draftStore.todoList = draftStore.todoList.filter((x) => {
            return x.id !== action.payload;
        });
    },
    [SEARCH_ACTIONS.SUCCESS]: (draftStore: TodoListState, action: Action<string>) => {
        draftStore.todoList = draftStore.todoList.filter((x) => {
            return x.title.includes(action.payload);
        });
    },
    [CHANGE_PAGE_ACTIONS.SUCCESS]: (draftStore: TodoListState, action: Action<number>) => {
        draftStore.paginationConfig.currentPage = action.payload;
        draftStore.paginationConfig.indexOfLastPost =
            draftStore.paginationConfig.currentPage * draftStore.paginationConfig.todosPerPage;
        draftStore.paginationConfig.indexOfFirstPost =
            draftStore.paginationConfig.indexOfLastPost - draftStore.paginationConfig.todosPerPage;
    },
};

export default produceReducer(actionHandlers, initialState) as Reducer<TodoListState>;
