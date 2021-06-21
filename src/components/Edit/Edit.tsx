import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Editable from '../Todo/Editable';
import { TodoInfo } from '../../services/todo/types';
import { editTodo } from '../../services/todo/actions';
import { GlobalState } from '../../services';

const Edit = (props: { data: TodoInfo; onCloseHandler: () => void }) => {
    const todoList = useSelector((state: GlobalState) => state.todo.todoList);
    const dispatch = useDispatch();
    console.log('edit', todoList);
    const closeModal = () => {
        props.onCloseHandler();
    };
    const EditTodoHandler = (data: TodoInfo) => {
        // console.log(data);
        dispatch(editTodo(data));
        closeModal();
    };

    return (
        <Editable
            onSubmitHandler={EditTodoHandler}
            onCloseModal={closeModal}
            title="Edit item to TodoList"
            item={props.data}
        />
    );
};

export default Edit;
