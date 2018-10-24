import React, { Component } from 'react';
import './App.css';
import Board from './components/board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> AI Tic Tac Toe </h1>
        <div className='Game'>
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
