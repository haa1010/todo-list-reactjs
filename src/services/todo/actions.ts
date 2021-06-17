import { TODO_ACTIONS, GetTodoListFailureAction, GetTodoListSuccessAction, GetTodoListAction, TodoInfo } from './types';

export const getTodoList = (): GetTodoListAction => {
    return {
        type: TODO_ACTIONS.LIST,
        // payload,
    };
};

export const getTodoListSuccess = (payload: TodoInfo[]): GetTodoListSuccessAction => {
    return {
        type: TODO_ACTIONS.SUCCESS,
        payload,
    };
};

export const getTodoListFailure = (): GetTodoListFailureAction => {
    return {
        type: TODO_ACTIONS.FAILURE,
    };
};
