export const TODO_ACTIONS = {
    LIST: 'GET_TODO_LIST',
    FAILURE: 'GET_TODO_FAILURE',
    SUCCESS: 'GET_TODO_SUCCESS',
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

// export type { GET_TODOAction, GET_TODOSuccessAction, GET_TODOFailureAction, GET_TODOResponse, GET_TODOParams, TodoInfo };
export type { TodoInfo, GetTodoListFailureAction, GetTodoListSuccessAction, GetTodoListAction };
