import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }


  searchUsersHandler = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false })
  }

  clearUsersHandler = () => {
    this.setState({ users: [], loading: false });
  }

  setAlertHandler = (message, type) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);

  }

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsersHandler}
            clearUsers={this.clearUsersHandler}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlertHandler} />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
