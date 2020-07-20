import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {

    const [text, setText] = useState('');

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (text === '') {
            setAlert(' Please enter something to search!', 'light')
        }
        else {
            searchUsers(text);
            setText('');
        }
    }
    return (
        <div>
            <form className="form" onSubmit={onSubmitHandler}>
                <input type="text"
                    name="text"
                    value={text}
                    placeholder="Search Users here"
                    onChange={onChangeHandler} />
                <input
                    type="submit"
                    value="search"
                    className="btn btn-dark btn-block"
                />
            </form>
            {showClear && <button
                className="btn btn-light btn-block"
                onClick={clearUsers}>Clear
                </button>}
        </div>
    );

}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.bool.isRequired,
}

export default Search
