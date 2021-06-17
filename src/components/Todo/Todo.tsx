import React from 'react';

const Todo = (props: any) => {
    const todo = props.todo;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    Todo <b>#{todo.id}</b>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    By user <b> #{todo.userId}</b>
                </h6>
                <p className="card-text">{todo.title}</p>
                <a href="#" className="card-link">
                    Edit
                </a>
            </div>
        </div>
    );
};

export default Todo;
