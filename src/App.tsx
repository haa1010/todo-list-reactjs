import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { getLoadableHelper } from './common/utils/loadableRoute';

const Login = getLoadableHelper(() => import('./pages/auth/Login/Login'));
const Home = getLoadableHelper(() => import('./pages/home/Home'));

const App: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div className="App">
            <ToastContainer />
            {/* <Header /> */}
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
