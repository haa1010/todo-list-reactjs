import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { GlobalState } from '../../services';
import Header from '../../components/Header/Header';
import Todo from '../../components/Todo/Todo';
import AppConstants from '../../common/constants/app';
import './HomeStyles.scss';
import { getTodoList } from '../../services/todo/actions';

const Home: React.FunctionComponent = (): React.ReactElement => {
    const history = useHistory();
    const logOut = () => {
        history.push('/login');
    };

    const dispatch = useDispatch();

    const todoList = useSelector((state: GlobalState) => state.todo.todoList);
    useEffect(() => {
        dispatch(getTodoList());
    }, []);

    return (
        <div className="container">
            <Header tabs={AppConstants.tabSetting} />
            <Button onClick={logOut} type="primary">
                Logout
            </Button>
            {todoList &&
                todoList.map((todo, index) => (
                    <div key={index}>
                        <Todo todo={todo} />
                    </div>
                ))}
        </div>
    );
};

export default Home;
