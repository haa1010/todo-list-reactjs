import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalState } from '../../services';
import Todo from '../../components/Todo/Todo';
import Add from '../../components/Add/Add';
import Edit from '../../components/Edit/Edit';
import Pagination from '../../components/Pagination/Pagination';
import './HomeStyles.scss';
import { TodoInfo } from '../../services/todo/types';
import { getTodoList } from '../../services/todo/actions';

const Home: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch();
    const todoList = useSelector((state: GlobalState) => state.todo.todoList);

    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editItem, setEditItem] = useState<TodoInfo>();
    const [showList, setShowList] = useState(todoList);
    const [search, setSearch] = useState<string | undefined>();
    const [isSearching, setIsSearching] = useState(false);
    const [searchTmp, setSearchTmp] = useState<string | undefined>();
    const [filteredList, setFilteredList] = useState(todoList);
    const [pageState, setPageState] = useState({
        currentPage: 1,
        todosPerPage: 10,
    });

    useEffect(() => {
        if (!(Array.isArray(todoList) && todoList.length)) dispatch(getTodoList());
    }, []);

    useEffect(() => {
        setFilteredList(todoList);
        setIsSearching(false);
    }, [todoList]);

    useEffect(() => {
        setShowList(filteredList.slice(indexOfFirstPost, indexOfLastPost));
    }, [pageState, filteredList]);

    // modal edit/add show/hide
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    const handleCloseEdit = () => setShowEdit(false);

    const handleShowEdit = (item: TodoInfo) => {
        setEditItem(item);
        setShowEdit(true);
    };

    // search
    const searchHandler = (event: any) => {
        event.preventDefault();
        setFilteredList(
            todoList.filter((e) => {
                return e.title.includes(search ? search : '');
            }),
        );
        setSearchTmp(search);
        setIsSearching(true);
        setShowList(filteredList.slice(indexOfFirstPost, indexOfLastPost));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const entered = event.target.value;
        setSearch(entered);
    };
    const deleteSearch = () => {
        setIsSearching(false);
        setFilteredList(todoList);
        setShowList(todoList.slice(indexOfFirstPost, indexOfLastPost));
    };

    // pagination
    const { currentPage, todosPerPage } = pageState;
    const indexOfLastPost = currentPage * todosPerPage;
    const indexOfFirstPost = indexOfLastPost - todosPerPage;

    const paginate = (pageNum: number) => setPageState({ ...pageState, currentPage: pageNum });

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
            {isSearching ? (
                <Button onClick={() => deleteSearch()} variant="outline-danger">
                    &times; Search result for: {searchTmp}
                </Button>
            ) : (
                <Button variant="primary" onClick={handleShowAdd}>
                    Add new item to TodoList
                </Button>
            )}

            <Modal show={showAdd} onHide={handleCloseAdd}>
                <Add onCloseHandler={handleCloseAdd} />
            </Modal>

            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Edit onCloseHandler={handleCloseEdit} data={editItem} />
            </Modal>

            {showList.length ? (
                showList.map((todo, index) => (
                    <div key={index}>
                        <Todo todo={todo} onEdit={() => handleShowEdit(todo)} />
                    </div>
                ))
            ) : (
                <h3>No results</h3>
            )}
            <Pagination todosPerPage={todosPerPage} totalTodos={filteredList.length} paginate={paginate} />
        </div>
    );
};

export default Home;
