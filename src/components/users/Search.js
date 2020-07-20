import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {

    const githubContext = useContext(GithubContext);

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
            githubContext.searchUsersHandler(text);
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
            {githubContext.users.length > 0 &&
                <button
                    className="btn btn-light btn-block"
                    onClick={githubContext.clearUsersHandler}>Clear
                </button>}
        </div>
    );

}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default Search
