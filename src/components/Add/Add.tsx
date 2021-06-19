import React from 'react';
import { useDispatch } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';

import Editable from '../Todo/Editable';
import { TodoInfo } from '../../services/todo/types';
import { addTodo } from '../../services/todo/actions';
// import { notify } from '../../common/utils/notify';

const Add = (props: any) => {
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
