import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Editable from '../Todo/Editable';
import { TodoInfo } from '../../services/todo/types';
import { addTodo } from '../../services/todo/actions';
import { GlobalState } from '../../services';

const Add = (props: any) => {
    const todoList = useSelector((state: GlobalState) => state.todo.todoList);
    const dispatch = useDispatch();
    console.log('sdfgh', todoList);

    const closeModal = () => {
        props.onCloseHandler();
    };

    const addNewTodo = (data: TodoInfo) => {
        console.log(data);
        dispatch(addTodo(data));
        closeModal();
    };

    return <Editable onSubmitHandler={addNewTodo} onCloseModal={closeModal} title="Add item to TodoList" />;
};

export default Add;
