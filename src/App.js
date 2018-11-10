import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx'
// import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      items: []
    };
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
