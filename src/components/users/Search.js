import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.bool.isRequired,
    }

    state = {
        text: ''
    }

    onChangeHandler = (event) => {
        this.setState({ text: event.target.value });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert(' Please enter something to search!', 'light')
        }
        else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }

    render() {

        const { clearUsers, showClear } = this.props;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmitHandler}>
                    <input type="text"
                        name="text"
                        value={this.state.text}
                        placeholder="Search Users here"
                        onChange={this.onChangeHandler} />
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
        )
    }
}

export default Search
