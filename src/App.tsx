import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './pages/about/About';
import { getLoadableHelper } from './common/utils/loadableRoute';

const Login = getLoadableHelper(() => import('./pages/auth/Login/Login'));
const Home = getLoadableHelper(() => import('./pages/home/Home'));

const App: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
