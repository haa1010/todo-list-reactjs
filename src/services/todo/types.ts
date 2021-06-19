export const TODO_ACTIONS = {
    LIST: 'GET_TODO_LIST',
    FAILURE: 'GET_TODO_FAILURE',
    SUCCESS: 'GET_TODO_SUCCESS',
};

export const ADD_TODO_ACTIONS = {
    ADD: 'ADD_TODO',
    FAILURE: 'ADD_TODO_FAILURE',
    SUCCESS: 'ADD_TODO_SUCCESS',
};

export const EDIT_TODO_ACTIONS = {
    EDIT: 'EDIT_TODO',
    FAILURE: 'EDIT_TODO_FAILURE',
    SUCCESS: 'EDIT_TODO_SUCCESS',
};

export const DELETE_TODO_ACTIONS = {
    DELETE: 'DELETE_TODO',
    FAILURE: 'DELETE_TODO_FAILURE',
    SUCCESS: 'DELETE_TODO_SUCCESS',
};

interface TodoInfo {
    userId: number;
    id: number;
    title: string;
    completed: true | false;
}

interface GetTodoListAction {
    type: typeof TODO_ACTIONS.LIST;
}

interface GetTodoListSuccessAction {
    type: typeof TODO_ACTIONS.SUCCESS;
    payload: TodoInfo[];
}

interface GetTodoListFailureAction {
    type: typeof TODO_ACTIONS.FAILURE;
}

interface AddTodoAction {
    type: typeof ADD_TODO_ACTIONS.ADD;
    payload: TodoInfo;
}

interface AddTodoSuccessAction {
    type: typeof ADD_TODO_ACTIONS.SUCCESS;
    payload: TodoInfo;
}

interface AddTodoFailureAction {
    type: typeof ADD_TODO_ACTIONS.FAILURE;
}

interface EditTodoAction {
    type: typeof EDIT_TODO_ACTIONS.EDIT;
    payload: TodoInfo;
}

interface EditTodoSuccessAction {
    type: typeof EDIT_TODO_ACTIONS.SUCCESS;
    payload: TodoInfo;
}

interface EditTodoFailureAction {
    type: typeof EDIT_TODO_ACTIONS.FAILURE;
}

interface DeleteTodoAction {
    type: typeof DELETE_TODO_ACTIONS.DELETE;
    payload: number;
}

interface DeleteTodoSuccessAction {
    type: typeof DELETE_TODO_ACTIONS.SUCCESS;
    payload: number;
}

interface DeleteTodoFailureAction {
    type: typeof DELETE_TODO_ACTIONS.FAILURE;
}

export type {
    TodoInfo,
    GetTodoListFailureAction,
    GetTodoListSuccessAction,
    GetTodoListAction,
    AddTodoAction,
    AddTodoFailureAction,
    AddTodoSuccessAction,
    EditTodoAction,
    EditTodoFailureAction,
    EditTodoSuccessAction,
    DeleteTodoAction,
    DeleteTodoFailureAction,
    DeleteTodoSuccessAction,
};
