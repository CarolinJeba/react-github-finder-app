import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Carol';
    const loading = false;
    const showName = true;

    // const foo = () => {
    //   return 'Carolin';
    // }

    // if (loading) {
    //   return <h4>Loading....</h4>
    // }

    return (
      <div className="App">
        {/* <h4>{foo()}</h4> */}
        {/* <h1>Hello {showName ? name : null}</h1> */}
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}

      </div>
    );
  }
}

export default App;
