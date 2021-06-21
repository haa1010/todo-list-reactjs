import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const history = useHistory();

    const [search, setSearch] = useState<string | undefined>();
    const searchHandler = (event: any) => {
        event.preventDefault();
        history.push({
            pathname: '/',
            search: `?search=${search}`,
        });
        setSearch('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const entered = event.target.value;
        setSearch(entered);
    };

    return (
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
    );
};

export default Search;
