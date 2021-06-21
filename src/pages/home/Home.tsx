import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { GlobalState } from '../../services';
import Todo from '../../components/Todo/Todo';
import Add from '../../components/Add/Add';
import Edit from '../../components/Edit/Edit';
import Pagination from '../../components/Pagination/Pagination';
import './HomeStyles.scss';
import { TodoInfo } from '../../services/todo/types';
import { getTodoList } from '../../services/todo/actions';
import Search from '../../components/Search/Search';

const Home: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const todoList = useSelector((state: GlobalState) => state.todo.todoList);
    let search = new URLSearchParams(location.search).get('search');

    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editItem, setEditItem] = useState<TodoInfo>();
    const [showList, setShowList] = useState(todoList);
    const [isSearching, setIsSearching] = useState(false);
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

    useEffect(() => {
        search = search ? search : '';
        console.log('search=', search);
        if (search.length > 0) {
            searchHandler();
        }
    }, [search]);

    // modal edit/add show/hide
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    const handleCloseEdit = () => setShowEdit(false);

    const handleShowEdit = (item: TodoInfo) => {
        setEditItem(item);
        setShowEdit(true);
    };

    // search
    const searchHandler = () => {
        setFilteredList(
            todoList.filter((e) => {
                return e.title.includes(search ? search : '');
            }),
        );
        setIsSearching(true);
    };

    const deleteSearch = () => {
        history.push({
            pathname: '/',
        });
        setIsSearching(false);
        setFilteredList(todoList);
    };

    // pagination
    const { currentPage, todosPerPage } = pageState;
    const indexOfLastPost = currentPage * todosPerPage;
    const indexOfFirstPost = indexOfLastPost - todosPerPage;

    const paginate = (pageNum: number) => setPageState({ ...pageState, currentPage: pageNum });

    return (
        <div className="">
            <Search></Search>
            {isSearching ? (
                <Button onClick={() => deleteSearch()} variant="outline-danger">
                    &times; Search result for: {search}
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
                {editItem && <Edit onCloseHandler={handleCloseEdit} data={editItem} />}
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
