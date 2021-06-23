import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalState } from '../../services';
import { changePage } from '../../services/todo/actions';

const Pagination = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state: GlobalState) => state.todo.todoList);
    const pageConfig = useSelector((state: GlobalState) => state.todo.paginationConfig);

    const [activePage, setActivePage] = useState(1);
    const pageNumbers = [];
    const todosPerPage = pageConfig.todosPerPage;
    const totalTodos = todoList.length;

    for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    const changePageHandler = (num: number) => {
        dispatch(changePage(num));
    };

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map((num) => (
                    <li key={num} className={'page-item ' + (num === activePage ? 'active' : ' ')}>
                        <a
                            onClick={() => {
                                changePageHandler(num);
                                setActivePage(num);
                            }}
                            href="#"
                            className="page-link"
                        >
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
