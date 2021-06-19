import { Tabs, Tab } from 'react-bootstrap';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './HeaderStyles.scss';

export interface HeaderProps {
    tabs: {
        title: string;
        path: string;
    }[];
}

// const Header: React.FunctionComponent<HeaderProps> = ({ tabs }): React.ReactElement => {
const Header = () => {
    const history = useHistory();
    const nav = [
        { title: 'Home', path: '/' },
        { title: 'Add', path: '/add' },
        // { title: 'Edit', path: '/edit' },
    ];

    return (
        <nav className="navbar navbar-light bg-light justify-content-end">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                    Search
                </button>
            </form>
        </nav>
    );
};

export default Header;
