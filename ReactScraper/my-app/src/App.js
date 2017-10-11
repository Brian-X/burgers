import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Nav.js';
import './Jumbotron.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        
        <Nav />
        <Jumbotron />

      </div>
    );
  }
}

export default App;
