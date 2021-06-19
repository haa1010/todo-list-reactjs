import {
    TODO_ACTIONS,
    ADD_TODO_ACTIONS,
    EDIT_TODO_ACTIONS,
    DELETE_TODO_ACTIONS,
    GetTodoListFailureAction,
    GetTodoListSuccessAction,
    GetTodoListAction,
    TodoInfo,
    AddTodoAction,
    AddTodoFailureAction,
    AddTodoSuccessAction,
    EditTodoAction,
    EditTodoFailureAction,
    EditTodoSuccessAction,
    DeleteTodoAction,
    DeleteTodoFailureAction,
    DeleteTodoSuccessAction,
} from './types';

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

export const addTodo = (payload: TodoInfo): AddTodoAction => {
    console.log('pl', payload);
    return {
        type: ADD_TODO_ACTIONS.ADD,
        payload,
    };
};

export const AddTodoSuccess = (payload: TodoInfo): AddTodoSuccessAction => {
    return {
        type: ADD_TODO_ACTIONS.SUCCESS,
        payload,
    };
};

export const AddTodoFailure = (): AddTodoFailureAction => {
    return {
        type: ADD_TODO_ACTIONS.FAILURE,
    };
};

export const editTodo = (payload: TodoInfo): EditTodoAction => {
    console.log('pl', payload);
    return {
        type: EDIT_TODO_ACTIONS.EDIT,
        payload,
    };
};

export const editTodoSuccess = (payload: TodoInfo): EditTodoSuccessAction => {
    return {
        type: EDIT_TODO_ACTIONS.SUCCESS,
        payload,
    };
};

export const editTodoFailure = (): EditTodoFailureAction => {
    return {
        type: EDIT_TODO_ACTIONS.FAILURE,
    };
};

export const deleteTodo = (payload: number): DeleteTodoAction => {
    console.log('pl', payload);
    return {
        type: DELETE_TODO_ACTIONS.DELETE,
        payload,
    };
};

export const deleteTodoSuccess = (payload: number): DeleteTodoSuccessAction => {
    return {
        type: DELETE_TODO_ACTIONS.SUCCESS,
        payload,
    };
};

export const deleteTodoFailure = (): DeleteTodoFailureAction => {
    return {
        type: DELETE_TODO_ACTIONS.FAILURE,
    };
};
