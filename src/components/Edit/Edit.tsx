import React from 'react';
import { useDispatch } from 'react-redux';

import Editable from '../Todo/TodoModal';
import { TodoInfo } from '../../services/todo/types';
import { editTodo } from '../../services/todo/actions';

interface EditProp {
    item: TodoInfo;
    onCloseHandler: () => void;
}

const Edit: React.FC<EditProp> = ({ item, onCloseHandler }) => {
    const dispatch = useDispatch();
    const closeModal = () => {
        onCloseHandler();
    };
    const EditTodoHandler = (item: TodoInfo) => {
        dispatch(editTodo(item));
        closeModal();
    };

    return (
        <Editable
            onSubmitHandler={EditTodoHandler}
            onCloseModal={closeModal}
            title="Edit item to TodoList"
            item={item}
        />
    );
};

export default Edit;
