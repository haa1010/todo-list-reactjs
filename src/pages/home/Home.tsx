import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalState } from '../../services';
import Todo from '../../components/Todo/Todo';
import Add from '../../components/Add/Add';
import Edit from '../../components/Edit/Edit';
import Pagination from '../../components/Pagination/Pagination';
import { TodoInfo } from '../../services/todo/types';
import { getTodoList } from '../../services/todo/actions';
import Search from '../../components/Search/Search';
import { notify } from '../../common/utils/notify';

import './HomeStyles.scss';

const Home: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch();

    const todoList = useSelector((state: GlobalState) => state.todo.todoList);

    const { indexOfLastPost, indexOfFirstPost } = useSelector((state: GlobalState) => state.todo.paginationConfig);

    const [showModal, setShowModal] = useState(false);
    const [editItem, setEditItem] = useState<TodoInfo>();

    useEffect(() => {
        dispatch(getTodoList());
    }, []);

    // modal show/hide
    const handleCloseModal = () => setShowModal(false);

    const selectTodoItem = (item?: TodoInfo) => {
        setEditItem(item);
        setShowModal(true);
    };

    return (
        <div className="">
            <Search />

            <Button variant="primary" onClick={() => setShowModal(true)}>
                Add new item to TodoList
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                {editItem ? (
                    <Edit onCloseHandler={handleCloseModal} item={editItem} />
                ) : (
                    <Add onCloseHandler={handleCloseModal} />
                )}
            </Modal>

            {todoList.slice(indexOfFirstPost, indexOfLastPost).length ? (
                todoList.slice(indexOfFirstPost, indexOfLastPost).map((todo, index) => (
                    <div key={index}>
                        <Todo todo={todo} onEdit={selectTodoItem} />
                    </div>
                ))
            ) : (
                <h3>No results</h3>
            )}
            <Pagination />
        </div>
    );
};

export default Home;
