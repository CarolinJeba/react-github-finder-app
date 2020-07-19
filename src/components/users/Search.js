import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
    }
    state = {
        text: ''
    }

    onChangeHandler = (event) => {
        this.setState({ text: event.target.value });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
    }

    render() {
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

            </div>
        )
    }
}

export default Search
