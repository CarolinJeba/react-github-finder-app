import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
