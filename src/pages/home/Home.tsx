import { Button } from 'react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { GlobalState } from '../../services';
import Header from '../../components/Header/Header';
import AppConstants from '../../common/constants/app';

import './HomeStyles.scss';

const Home: React.FunctionComponent = (): React.ReactElement => {
    const history = useHistory();
    const user = useSelector((state: GlobalState) => state.auth.user);
    const logOut = () => {
        history.push('/login');
    };
    return (
        <div className="container">
            <Header tabs={AppConstants.tabSetting} />
            <Button onClick={logOut} type="primary">
                Logout
            </Button>
            <div>
                <p>Email: {user.email}</p>
                <p>Token: {user.token}</p>
            </div>
        </div>
    );
};

export default Home;
