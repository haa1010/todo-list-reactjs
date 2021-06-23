import React from 'react';
import { useDispatch } from 'react-redux';

import Editable from '../Todo/TodoModal';
import { TodoInfo } from '../../services/todo/types';
import { addTodo } from '../../services/todo/actions';

const Add = (props: { onCloseHandler: () => void }) => {
    const dispatch = useDispatch();

    const closeModal = () => {
        props.onCloseHandler();
    };

    const addNewTodo = (data: TodoInfo) => {
        dispatch(addTodo(data));
        closeModal();
    };

    return <Editable onSubmitHandler={addNewTodo} onCloseModal={closeModal} title="Add item to TodoList" />;
};

export default Add;
