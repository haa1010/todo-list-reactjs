import { Reducer } from 'redux';
import { Action } from 'redux-actions';

import { produceReducer } from '../../common/utils/immer';

import { TODO_ACTIONS, TodoInfo } from './types';

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
};

export default produceReducer(actionHandlers, initialState) as Reducer<TodoListState>;
