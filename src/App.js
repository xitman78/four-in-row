import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid col={8} row={8} />
      </div>
    );
  }
}

export default App;
