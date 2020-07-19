import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }

    onChangeHandler = (event) => {
        this.setState({ text: event.target.value });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.text)
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
