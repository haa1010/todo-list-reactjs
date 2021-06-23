import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { deleteTodo } from '../../services/todo/actions';
import { TodoInfo } from '../../services/todo/types';
import './Todo.scss';

interface TodoProp {
    todo: TodoInfo;
    onEdit: (todo: TodoInfo) => void;
}
const Todo: React.FunctionComponent<TodoProp> = ({ todo, onEdit }) => {
    const dispatch = useDispatch();
    const onDeleteHandler = () => {
        dispatch(deleteTodo(todo.id));
    };
    return (
        <div className="card col-3">
            <div className="card-body">
                <h5 className="card-title">
                    Todo <b>#{todo.id}</b>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    By user <b> #{todo.userId}</b>
                </h6>
                <p className="card-text">{todo.title}</p>
                <p className="card-text">Complete: {todo.completed ? 'Yes' : 'Not yet'}</p>
                <Button className="card-link" type="primary" onClick={() => onEdit(todo)}>
                    Edit
                </Button>
                <Button className="card-link" variant="danger" onClick={onDeleteHandler}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default Todo;
