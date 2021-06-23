import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changePage, search } from '../../services/todo/actions';

const searchStr = () => {
    const dispatch = useDispatch();

    const [searchStr, setSearchStr] = useState<string>('');
    const searchStrHandler = (event: any) => {
        event.preventDefault();
        dispatch(changePage(1));
        dispatch(search(searchStr));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const entered = event.target.value;
        setSearchStr(entered);
    };

    return (
        <nav className="navbar navbar-light bg-light justify-content-end" onSubmit={searchStrHandler}>
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="searchStr"
                    placeholder="search"
                    aria-label="searchStr"
                    value={searchStr}
                    onChange={handleChange}
                />
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                    Search
                </button>
            </form>
        </nav>
    );
};

export default searchStr;
