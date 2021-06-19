import { Button, Modal } from 'react-bootstrap';
import React, { FormEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { GlobalState } from '../../services';
import Header from '../../components/Header/Header';
import Todo from '../../components/Todo/Todo';
import Add from '../../components/Add/Add';
import Edit from '../../components/Edit/Edit';
import './HomeStyles.scss';
import { TodoInfo } from '../../services/todo/types';
import { getTodoList } from '../../services/todo/actions';

const Home: React.FunctionComponent = (): React.ReactElement => {
    const history = useHistory();
    const dispatch = useDispatch();
    const todoList = useSelector((state: GlobalState) => state.todo.todoList);

    // let showList = todoList;
    const logOut = () => {
        history.push('/login');
    };

    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editItem, setEditItem] = useState<TodoInfo>();
    const [showList, setShowList] = useState(todoList);
    const [search, setSearch] = useState<string | undefined>();

    useEffect(() => {
        dispatch(getTodoList());
    }, []);
    useEffect(() => {
        setShowList(todoList);
    }, [todoList]);

    const resetList = () => {
        setShowList(todoList);
    };

    const handleCloseAdd = () => {
        setShowAdd(false);
        // resetList();
    };
    const handleShowAdd = () => {
        setShowAdd(true);
    };
    const handleCloseEdit = () => {
        setShowEdit(false);
        // resetList();
    };
    const handleShowEdit = (item: TodoInfo) => {
        setEditItem(item);
        setShowEdit(true);
    };

    const searchHandler = (event: any) => {
        event.preventDefault();
        const tmp = todoList.filter((e) => {
            return e.title.includes(search ? search : '');
        });
        setShowList(tmp);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const entered = event.target.value;
        setSearch(entered);
    };

    return (
        <div className="">
            <nav className="navbar navbar-light bg-light justify-content-end" onSubmit={searchHandler}>
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={search}
                        onChange={handleChange}
                    />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </nav>
            {/* <Button onClick={logOut} type="primary">
                Logout
            </Button> */}
            <Button variant="primary" onClick={handleShowAdd}>
                Add new item to TodoList
            </Button>
            <Modal show={showAdd} onHide={handleCloseAdd}>
                <Add onCloseHandler={handleCloseAdd} onReset={resetList} />
            </Modal>

            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Edit onCloseHandler={handleCloseEdit} data={editItem} onReset={resetList} />
            </Modal>

            {showList &&
                showList.map((todo, index) => (
                    <div key={index}>
                        <Todo todo={todo} onEdit={() => handleShowEdit(todo)} />
                    </div>
                ))}
        </div>
    );
};

export default Home;
