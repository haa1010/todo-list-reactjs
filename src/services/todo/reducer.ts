import { Reducer } from 'redux';
import { Action } from 'redux-actions';

import { produceReducer } from '../../common/utils/immer';

import { TODO_ACTIONS, ADD_TODO_ACTIONS, EDIT_TODO_ACTIONS, DELETE_TODO_ACTIONS, TodoInfo } from './types';

export interface TodoListState {
    todoList: TodoInfo[];
}

const initialState: TodoListState = {
    todoList: [{ userId: 0, id: 0, title: '', completed: false }],
};

const actionHandlers = {
    [TODO_ACTIONS.SUCCESS]: (draftStore: TodoListState, action: Action<TodoInfo[]>) => {
        draftStore.todoList = action.payload;
    },
    [ADD_TODO_ACTIONS.SUCCESS]: (draftStore: TodoListState, action: Action<TodoInfo>) => {
        draftStore.todoList.push(action.payload);
    },
    [EDIT_TODO_ACTIONS.SUCCESS]: (draftStore: TodoListState, action: Action<TodoInfo>) => {
        console.log('edit success', action.payload);
        draftStore.todoList.forEach((e, index) => {
            if (e.id === action.payload.id) {
                draftStore.todoList[index] = action.payload;
            }
        });
    },
    [DELETE_TODO_ACTIONS.SUCCESS]: (draftStore: TodoListState, action: Action<number>) => {
        console.log('action', action);
        draftStore.todoList = draftStore.todoList.filter((x) => {
            return x.id !== action.payload;
        });
    },
};

export default produceReducer(actionHandlers, initialState) as Reducer<TodoListState>;
